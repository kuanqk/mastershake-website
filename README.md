# Мастер+Шаке — сайт сервисного центра

Сайт для сервисного центра по ремонту бытовой техники в Алматы.

## Технологии

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Lucide React (иконки)

## Запуск

```bash
# Установка зависимостей
npm install

# Режим разработки
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен-сервера
npm start
```

Откройте http://localhost:3000

## Структура проекта

```
src/
├── app/
│   ├── layout.tsx        # Root layout с SEO и JSON-LD
│   ├── page.tsx          # Главная страница
│   ├── globals.css       # Глобальные стили
│   └── sitemap.ts        # Генерация sitemap.xml
├── components/
│   ├── Hero.tsx          # Шапка с CTA
│   ├── Advantages.tsx    # Преимущества
│   ├── Masters.tsx       # Карточки мастеров
│   ├── Services.tsx      # Список услуг
│   ├── CTA.tsx           # Призыв к действию
│   ├── Contacts.tsx      # Контакты и карта
│   └── Footer.tsx        # Подвал
├── data/
│   └── content.json      # Весь контент сайта
public/
├── images/               # Фото мастеров
└── robots.txt
```

## Деплой

Проект настроен с `output: "standalone"` — подходит для Docker, VPS, Vercel.

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

### Vercel

```bash
npm i -g vercel
vercel
```

## Контент

Весь контент сайта находится в `src/data/content.json`. Для изменения текстов, контактов или услуг — редактируйте этот файл.

Фото мастеров размещайте в `public/images/` (master-1.jpg, master-2.jpg, master-3.jpg).
