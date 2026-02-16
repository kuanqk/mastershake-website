# Техническое задание: Миграция сайта MasterShake.kz

## 1. Общая информация

**Проект:** Миграция лендинга сервисного центра MasterShake с Tilda на собственный хостинг  
**Текущий сайт:** https://www.mastershake.kz/  
**Хостинг:** Ubuntu 22.04 LTS (91.243.71.139)  
**Git репозиторий:** github.com/kuanqk  
**Домен:** mastershake.kz

## 2. Цели проекта

- Переписать сайт с Tilda на современный стек
- Развернуть на собственном VPS
- Обеспечить отличное SEO для поиска в Алматы
- Легкость обслуживания и обновления контента
- Быстрая загрузка и производительность

## 3. Технологический стек

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (опционально)
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Inter, sans-serif)

### Backend
- **Runtime:** Node.js 20 LTS
- **Process Manager:** PM2
- **Web Server:** Nginx (reverse proxy)

### DevOps
- **Version Control:** Git (GitHub)
- **Deployment:** Manual deploy via SSH / GitHub Actions (опционально)
- **SSL:** Let's Encrypt (Certbot)
- **Monitoring:** PM2 + logs

## 4. Структура сайта

### Страницы
```
/                   # Главная (одностраничник)
/sitemap.xml        # Карта сайта (автогенерация)
/robots.txt         # Правила индексации
```

### Секции главной страницы
1. **Hero Section**
   - Заголовок: "Ремонт телевизоров и бытовой техники в Алматы"
   - Подзаголовок: "Выезд мастера на дом • 40 лет опыта • Гарантия на работы"
   - CTA кнопки: "Написать в WhatsApp", "Позвонить сейчас"
   - Телефоны: +7 707 323 1884, +7 705 221 3412

2. **Преимущества** (#advantages)
   - 40 лет опыта
   - Удобно и надежно (выезд на дом)
   - Диагностика от 1000 тг

3. **Наши мастера** (#masters)
   - Шурабатыр (Шаке) - мастер широкого профиля, инженер-электрик
   - Андрей - мастер по ремонту холодильников
   - Яша - мастер по ремонту пылесосов

4. **Услуги** (#services)
   - Ремонт телевизоров
   - Ремонт микроволновок
   - Ремонт пылесосов
   - Замена подсветки
   - Мелкая бытовая техника
   - Установка и подвеска

5. **Призыв к действию** (#cta)
   - Диагностика с выездом от 1000 тг
   - Кнопка "Оставить заявку"

6. **Контакты** (#contacts)
   - Адрес: мкрн. Аксай-4, дом 30, офис 18, Алматы
   - Телефоны: +7 707 323 1884, +7 705 221 3412
   - Карта (Yandex Maps / 2GIS)

## 5. SEO Требования

### Meta Tags (для главной страницы)
```javascript
title: "Ремонт телевизоров и бытовой техники в Алматы | Мастер+Шаке"
description: "Ремонт телевизоров, микроволновок, пылесосов в Алматы. Выезд мастера на дом. 40 лет опыта. Гарантия. ☎ +7 707 323 1884"
keywords: "ремонт телевизоров алматы, ремонт микроволновок алматы, ремонт пылесосов, мастер на дом, сервисный центр алматы, аксай"
```

### Open Graph
```javascript
og:title: "Мастер+Шаке - Ремонт техники в Алматы"
og:description: "Выезд мастера на дом. 40 лет опыта. Гарантия на работы"
og:type: "website"
og:locale: "ru_RU"
og:image: "/og-image.jpg" (создать)
```

### Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Мастер+Шаке",
  "description": "Ремонт телевизоров и бытовой техники в Алматы",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "мкрн. Аксай-4, дом 30, офис 18",
    "addressLocality": "Алматы",
    "addressRegion": "Алматинская область",
    "addressCountry": "KZ"
  },
  "telephone": ["+77073231884", "+77052213412"],
  "priceRange": "от 1000₸",
  "areaServed": {
    "@type": "City",
    "name": "Алматы"
  },
  "openingHours": "Mo-Su 08:00-20:00",
  "image": "https://www.mastershake.kz/logo.png",
  "url": "https://www.mastershake.kz"
}
```

### Robots.txt
```
User-agent: *
Allow: /
Sitemap: https://www.mastershake.kz/sitemap.xml

User-agent: Yandex
Allow: /
Host: www.mastershake.kz

User-agent: YandexBot
Allow: /
```

### Sitemap.xml
- Автоматическая генерация через Next.js

### Языки
- Основной: Русский (ru)
- Дополнительно: Казахский (kk) - опционально для будущего

## 6. Функциональные требования

### Взаимодействие с клиентом
1. **Кнопка WhatsApp**
   - Ссылка: `https://wa.me/77073231884`
   - Текст по умолчанию: "Здравствуйте! Интересует ремонт техники"

2. **Кнопка звонка**
   - `tel:+77073231884`
   - Должна корректно работать на мобильных

3. **Плавная прокрутка** (Smooth scroll)
   - По якорным ссылкам (#services, #contacts и т.д.)

4. **Адаптивный дизайн**
   - Mobile-first подход
   - Breakpoints: 320px, 768px, 1024px, 1280px

### Производительность
- **Lighthouse Score:** >90 (Performance, SEO, Accessibility)
- **Core Web Vitals:**
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
- **Оптимизация изображений:** WebP формат, lazy loading
- **Минимизация JS/CSS:** автоматически через Next.js

### Аналитика
- Google Analytics 4
- Yandex Metrika
- События отслеживания:
  - Клик по кнопке WhatsApp
  - Клик по кнопке звонка
  - Клик по номеру телефона

## 7. Дизайн требования

### Цветовая схема
```css
Основной: #2563eb (синий)
Акцент: #10b981 (зеленый, для CTA)
Фон: #ffffff
Текст: #1f2937
Серый: #6b7280
```

### Типографика
```css
Заголовок H1: 48px/60px (mobile: 32px/40px)
Заголовок H2: 36px/44px (mobile: 24px/32px)
Текст: 16px/24px
Кнопки: 16px, font-weight: 600
```

### Компоненты
- Кнопки с hover эффектами
- Карточки мастеров с тенями
- Иконки (телефон, WhatsApp, локация)
- Фавикон и Apple Touch Icon

## 8. Структура проекта

```
mastershake-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD (опционально)
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── og-image.jpg
│   │   ├── favicon.ico
│   │   └── masters/            # Фото мастеров
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Главная страница
│   │   ├── sitemap.ts          # Sitemap генератор
│   │   └── globals.css
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Advantages.tsx
│   │   ├── Masters.tsx
│   │   ├── Services.tsx
│   │   ├── CTA.tsx
│   │   ├── Contacts.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   └── utils.ts
│   └── data/
│       └── content.json        # Контент для легкого редактирования
├── .env.local                  # Переменные окружения
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── README.md
└── DEPLOYMENT.md               # Инструкция по деплою
```

## 9. Инструкция по развертыванию

### Шаг 1: Подготовка сервера
```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Установка Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Установка PM2
sudo npm install -g pm2

# Установка Nginx
sudo apt install -y nginx

# Установка Certbot для SSL
sudo apt install -y certbot python3-certbot-nginx
```

### Шаг 2: Клонирование и сборка проекта
```bash
# Клонирование репозитория
cd /var/www
sudo git clone https://github.com/kuanqk/mastershake-website.git
cd mastershake-website

# Установка зависимостей
npm install

# Сборка production версии
npm run build

# Запуск через PM2
pm2 start npm --name "mastershake" -- start
pm2 save
pm2 startup
```

### Шаг 3: Настройка Nginx
```nginx
# /etc/nginx/sites-available/mastershake.kz
server {
    listen 80;
    server_name mastershake.kz www.mastershake.kz;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

```bash
# Активация конфигурации
sudo ln -s /etc/nginx/sites-available/mastershake.kz /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Шаг 4: Настройка SSL
```bash
# Получение сертификата Let's Encrypt
sudo certbot --nginx -d mastershake.kz -d www.mastershake.kz

# Автопродление (проверить)
sudo certbot renew --dry-run
```

### Шаг 5: Настройка DNS
```
A record: mastershake.kz → 91.243.71.139
A record: www.mastershake.kz → 91.243.71.139
```

## 10. Обновление контента

### Редактирование через Git
```bash
# На локальной машине
git pull origin main
# Редактировать src/data/content.json
git add .
git commit -m "Update content"
git push origin main

# На сервере
cd /var/www/mastershake-website
git pull origin main
npm run build
pm2 restart mastershake
```

### Быстрое редактирование контента
Все тексты, телефоны, адреса хранятся в `src/data/content.json`:
```json
{
  "businessName": "Мастер+Шаке",
  "phones": ["+77073231884", "+77052213412"],
  "address": "мкрн. Аксай-4, дом 30, офис 18",
  "city": "Алматы",
  "whatsapp": "77073231884",
  "workingHours": "Пн-Вс 08:00-20:00",
  "masters": [...],
  "services": [...]
}
```

## 11. Мониторинг и поддержка

### Логи
```bash
# PM2 логи
pm2 logs mastershake

# Nginx логи
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Мониторинг
```bash
# Статус приложения
pm2 status

# Использование ресурсов
pm2 monit
```

### Резервное копирование
```bash
# Бэкап проекта
sudo tar -czf /backup/mastershake-$(date +%F).tar.gz /var/www/mastershake-website
```

## 12. Чек-лист перед запуском

- [ ] Все секции заполнены корректным контентом
- [ ] Телефоны работают (кликабельны на мобильных)
- [ ] WhatsApp кнопка открывает чат
- [ ] Адрес корректно отображается на карте
- [ ] Мета-теги заполнены
- [ ] Структурированные данные добавлены
- [ ] Sitemap.xml генерируется
- [ ] Robots.txt настроен
- [ ] SSL сертификат установлен (https)
- [ ] Адаптивная верстка на всех устройствах
- [ ] Lighthouse score >90
- [ ] Google Analytics подключен
- [ ] Yandex Metrika подключена
- [ ] Сайт зарегистрирован в Google Search Console
- [ ] Сайт зарегистрирован в Yandex Webmaster
- [ ] Сайт добавлен в Google My Business
- [ ] Сайт добавлен в 2GIS
- [ ] Сайт добавлен в Яндекс.Справочник

## 13. Дополнительные улучшения (после запуска)

### Фаза 2 (опционально)
- [ ] Добавить блог/новости
- [ ] Онлайн форма заявки (с отправкой в Telegram bot)
- [ ] Галерея выполненных работ
- [ ] Отзывы клиентов
- [ ] Калькулятор стоимости ремонта
- [ ] Каталог услуг с ценами
- [ ] Многоязычность (казахский язык)

### SEO оптимизация
- [ ] Оптимизация alt-текстов изображений
- [ ] Добавление FAQ секции (schema.org/FAQPage)
- [ ] Создание страниц по районам Алматы
- [ ] Контекстная реклама Google Ads
- [ ] Контекстная реклама Yandex Direct

---

## Контакты для вопросов
- **Разработчик:** Kuanysh
- **Git:** github.com/kuanqk
- **Сервер:** 91.243.71.139 (Ubuntu 22.04)
