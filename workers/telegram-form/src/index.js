/**
 * Прокси: браузер → Worker → Telegram Bot API (токен только здесь, в секретах Cloudflare).
 */

function json(body, status, extraHeaders) {
  var h = new Headers(extraHeaders || {});
  h.set("Content-Type", "application/json; charset=utf-8");
  return new Response(JSON.stringify(body), { status: status, headers: h });
}

function parseAllowedOrigins(raw) {
  if (!raw || typeof raw !== "string") {
    return [];
  }
  return raw
    .split(",")
    .map(function (s) {
      return s.trim();
    })
    .filter(Boolean);
}

function corsForRequest(request, env) {
  var origin = request.headers.get("Origin") || "";
  var allowed = parseAllowedOrigins(env.ALLOWED_ORIGINS);
  var headers = new Headers();
  headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type, Accept");
  headers.set("Access-Control-Max-Age", "86400");
  if (allowed.length === 0) {
    headers.set("Access-Control-Allow-Origin", "*");
  } else if (origin && allowed.indexOf(origin) !== -1) {
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Vary", "Origin");
  } else {
    return null;
  }
  return headers;
}

function sanitizeField(s, maxLen) {
  if (typeof s !== "string") {
    return "";
  }
  return s
    .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, "")
    .trim()
    .slice(0, maxLen);
}

export default {
  async fetch(request, env) {
    var cors = corsForRequest(request, env);
    if (!cors) {
      return json({ ok: false, error: "Origin not allowed" }, 403);
    }

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    if (request.method !== "POST") {
      return json({ ok: false, error: "Method not allowed" }, 405, cors);
    }

    var token = env.TELEGRAM_BOT_TOKEN;
    var chatId = env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) {
      return json({ ok: false, error: "Worker is not configured" }, 500, cors);
    }

    var payload;
    try {
      payload = await request.json();
    } catch (e) {
      return json({ ok: false, error: "Invalid JSON" }, 400, cors);
    }

    if (typeof payload._gotcha === "string" && payload._gotcha.trim()) {
      return json({ ok: true }, 200, cors);
    }

    var name = sanitizeField(payload.name, 200);
    var phone = sanitizeField(payload.phone, 40);
    if (!name || !phone) {
      return json({ ok: false, error: "Missing name or phone" }, 400, cors);
    }

    var text =
      "Заявка с сайта English for Engineers\n" +
      "Имя: " +
      name +
      "\n" +
      "Телефон: " +
      phone;

    var tgUrl = "https://api.telegram.org/bot" + token + "/sendMessage";
    var tgRes = await fetch(tgUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        disable_web_page_preview: true,
      }),
    });

    var tgData;
    try {
      tgData = await tgRes.json();
    } catch (e) {
      return json({ ok: false, error: "Telegram response invalid" }, 502, cors);
    }

    if (!tgRes.ok || !tgData.ok) {
      return json(
        {
          ok: false,
          error: (tgData && tgData.description) || "Telegram error",
        },
        502,
        cors
      );
    }

    return json({ ok: true }, 200, cors);
  },
};
