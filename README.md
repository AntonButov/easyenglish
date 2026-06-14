# EasyEnglish — archenglish.ru

Статический лендинг курса английского (инженеры / архитекторы по utm).

## Деплой

При push в **main** или **master** запускается [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) → GitHub Pages → **https://archenglish.ru**

Один раз в GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Сегменты лендинга

| utm_campaign | Тексты |
|--------------|--------|
| `architects_msk`, `architects_spb` или `?segment=architects` | English for Architects |
| остальное | English for Engineers (по умолчанию) |

Логика: `content-segments.js` + `main.js`.
