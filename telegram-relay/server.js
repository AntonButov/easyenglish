"use strict";

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json({ limit: "16kb" }));

const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin:
      allowedOrigins.length > 0
        ? function (origin, cb) {
            if (!origin || allowedOrigins.indexOf(origin) !== -1) {
              cb(null, true);
            } else {
              cb(new Error("Not allowed by CORS"));
            }
          }
        : true,
    methods: ["POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Accept"],
  })
);

function sanitize(s, max) {
  if (typeof s !== "string") return "";
  return s
    .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, "")
    .trim()
    .slice(0, max);
}

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  var gotcha = req.body && req.body._gotcha;
  if (typeof gotcha === "string" && gotcha.trim()) {
    return res.status(200).json({ ok: true });
  }

  const name = sanitize(req.body && req.body.name, 200);
  const phone = sanitize(req.body && req.body.phone, 40);
  if (!name || !phone) {
    return res.status(400).json({ ok: false, error: "Missing name or phone" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return res.status(500).json({ ok: false, error: "Server is not configured" });
  }

  const text =
    "Заявка с сайта English for Engineers\n" +
    "Имя: " +
    name +
    "\n" +
    "Телефон: " +
    phone;

  const tgUrl = "https://api.telegram.org/bot" + token + "/sendMessage";
  let tgData;
  try {
    const tgRes = await fetch(tgUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    });
    tgData = await tgRes.json();
    if (!tgRes.ok || !tgData.ok) {
      return res.status(502).json({
        ok: false,
        error: (tgData && tgData.description) || "Telegram error",
      });
    }
  } catch (e) {
    return res.status(502).json({ ok: false, error: "Telegram unreachable" });
  }

  res.json({ ok: true });
});

const port = Number(process.env.PORT) || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log("telegram-relay listening on 0.0.0.0:" + port);
});
