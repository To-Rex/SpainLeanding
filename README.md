# 🇺🇿 Uzbekistán Cultural Guide

**Ispaniyalik sayyohlar uchun O'zbekiston bo'ylab sayohat platformasi**

Bu loyiha Ispaniyalik sayyohlarni O'zbekistonning boy madaniy merosi, tarixiy yodgorliklari va noyob sayohat tajribalari bilan tanishtirishga qaratilgan zamonaviy web-platforma hisoblanadi.

---

## 🎯 Loyiha Maqsadi

### Asosiy Vazifalar:
- **Madaniy Ko'prik** - Ispaniya va O'zbekiston o'rtasida madaniy aloqalarni mustahkamlash
- **Sayohat Yo'riqnomasi** - To'liq va ishonchli sayohat ma'lumotlarini taqdim etish
- **Tajriba Almashish** - Haqiqiy sayyohlarning tajribalarini baham ko'rish
- **Xizmat Ko'rsatish** - Shaxsiy sayohat maslahatlarini berish

### Foydalanuvchilar Uchun Xizmatlar:
- ✈️ **Sayohat Yo'nalishlari** - Samarqand, Buxoro, Xiva, Toshkent va boshqa shaharlar haqida batafsil ma'lumot
- 🏛️ **Madaniy Meros** - UNESCO yodgorliklari va tarixiy joylar
- 🍽️ **Gastronomiya** - O'zbek oshxonasi va milliy taomlar
- 🎨 **San'at va Hunarmandchilik** - An'anaviy hunarmandchilik va zamonaviy san'at
- 📋 **Amaliy Maslahatlar** - Viza, transport, turar joy va xavfsizlik bo'yicha yo'riqnomalar
- 💬 **Shaxsiy Maslahat** - Individual sayohat rejalari tuzish

---

## 🗂️ Loyiha Tuzilmasi

```
uzbekistan-cultural-guide/
├── 📁 public/                          # Statik fayllar
│   └── favicon.svg                     # Sayt belgisi
├── 📁 src/                             # Asosiy manba kodlari
│   ├── 📁 components/                  # Qayta foydalaniladigan komponentlar
│   │   ├── ContactForm.astro          # Bog'lanish formasi
│   │   ├── Hero.astro                 # Qahramon bo'limi
│   │   ├── LanguageSwitcher.astro     # Til o'zgartirish tugmasi
│   │   ├── Navigation.astro           # Asosiy navigatsiya
│   │   └── Welcome.astro              # Xush kelibsiz komponenti
│   ├── 📁 i18n/                       # Xalqarolashtirish (Internationalization)
│   │   ├── languages.ts               # Barcha tillar uchun tarjimalar
│   │   └── utils.ts                   # Til boshqaruvi uchun yordamchi funksiyalar
│   ├── 📁 layouts/                    # Sahifa shablonlari
│   │   └── Layout.astro               # Asosiy sahifa shabloni
│   ├── 📁 lib/                        # Kutubxonalar va konfiguratsiyalar
│   │   └── supabase.ts                # Ma'lumotlar bazasi ulanishi
│   └── 📁 pages/                      # Sahifalar
│       ├── index.astro                # Asosiy sahifa (Ispancha)
│       └── 📁 [...lang]/              # Ko'p tilli sahifalar
│           ├── index.astro            # Asosiy sahifa (boshqa tillar)
│           ├── cultura.astro          # Madaniyat sahifasi
│           ├── destinos.astro         # Yo'nalishlar sahifasi
│           ├── consejos.astro         # Maslahatlar sahifasi
│           ├── itinerarios.astro      # Marshrutlar sahifasi
│           ├── galeria.astro          # Galereya sahifasi
│           └── contacto.astro         # Bog'lanish sahifasi
├── 📁 supabase/                       # Ma'lumotlar bazasi
│   └── 📁 migrations/                 # Ma'lumotlar bazasi o'zgarishlari
├── astro.config.mjs                   # Astro konfiguratsiyasi
├── package.json                       # Loyiha bog'liqliklari
├── tsconfig.json                      # TypeScript konfiguratsiyasi
└── README.md                          # Ushbu fayl
```

### 🧩 Asosiy Komponentlar:

#### 🧭 **Navigation.astro**
- Saytning asosiy navigatsiya paneli
- Responsiv dizayn (mobil va desktop)
- Til o'zgartirish tugmasi integratsiyasi
- Faol sahifani ko'rsatish

#### 🎭 **Hero.astro**
- Sahifaning qahramon bo'limi
- Slayder funksiyasi bilan
- O'zbekistonning go'zal manzaralari

#### 📝 **ContactForm.astro**
- Foydalanuvchilar bilan bog'lanish formasi
- Supabase ma'lumotlar bazasiga ulanish
- Form validatsiyasi va xato xabarlari

#### 🌐 **LanguageSwitcher.astro**
- Til o'zgartirish interfeysi
- Dropdown menyu
- Joriy tilni ko'rsatish

---

## 🌐 Ko'p Tillilik (i18n)

### Qo'llab-quvvatlanadigan Tillar:
- 🇪🇸 **Español (es)** - Asosiy til (default)
- 🇺🇿 **O'zbekcha (uz)** - Mahalliy til
- 🇬🇧 **English (en)** - Xalqaro til
- 🇷🇺 **Русский (ru)** - Mintaqaviy til

### Til Tizimi Ishlashi:

#### 📁 **src/i18n/languages.ts**
```typescript
export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.culture': 'Cultura',
    // ... boshqa tarjimalar
  },
  uz: {
    'nav.home': 'Bosh sahifa',
    'nav.culture': 'Madaniyat',
    // ... boshqa tarjimalar
  }
  // ... boshqa tillar
}
```

#### 🔧 **src/i18n/utils.ts**
- `getLangFromUrl()` - URL'dan tilni aniqlash
- `useTranslations()` - Tarjima funksiyasini olish
- `getLocalizedPath()` - Til bilan yo'lni yaratish

### URL Tuzilmasi:
```
tripasia.uz/                    # Ispancha (default)
tripasia.uz/uz/                 # O'zbekcha
tripasia.uz/en/                 # Inglizcha
tripasia.uz/ru/                 # Ruscha
```

### Yangi Tarjima Qo'shish:
1. `src/i18n/languages.ts` fayliga yangi kalit qo'shing
2. Barcha tillarda tarjima qo'shing
3. Komponentda `t('yangi.kalit')` ishlatib chaqiring

---

## 💡 UI Elementlari va Sahifalar

### 🏠 **Asosiy Sahifa (index.astro)**
- **Hero Section** - Slayder bilan asosiy taassurot
- **Highlights** - O'zbekistonni tanlashning sabablari
- **Image Slider** - Tarixiy joylarning rasmlari
- **Contact CTA** - Bog'lanish chaqiruvi

### 🎭 **Madaniyat Sahifasi (cultura.astro)**
- **Gastronomiya** - Milliy taomlar (plov, somsa, choy)
- **An'analar** - Raqs, kiyim-kechak, me'morchilik
- **Odob-axloq** - Madaniy qoidalar va maslahatlar

### 🗺️ **Yo'nalishlar (destinos.astro)**
- **Samarqand** - Registon, Gur-e-Amir
- **Buxoro** - Poi-Kalyan, Ark qal'asi
- **Xiva** - Ichan-qala
- **Toshkent** - Zamonaviy poytaxt
- **Farg'ona vodiysi** - Hunarmandchilik markazi

### 💡 **Maslahatlar (consejos.astro)**
- **Viza Ma'lumotlari** - Kirish talablari
- **Pul va Transport** - Amaliy maslahatlar
- **Aloqa** - Internet va telefon
- **Madaniy Qoidalar** - Kiyinish va xulq-atvor
- **Xavfsizlik** - Sog'liq va favqulodda vaziyatlar

### 🛤️ **Marshrutlar (itinerarios.astro)**
- **5 Kunlik Klassik** - Asosiy shaharlar
- **10 Kunlik To'liq** - Chuqur tajriba
- **Rejalashtirish Maslahatlari** - Amaliy yo'riqnomalar

### 🖼️ **Galereya (galeria.astro)**
- **Foto Galereya** - Professional rasmlar
- **Sayyohlar Fikrlari** - Haqiqiy sharhlar
- **Amaliy Maslahatlar** - Fotografiya va xarid qilish

### 📞 **Bog'lanish (contacto.astro)**
- **Aloqa Usullari** - Email, WhatsApp, Telegram
- **Maslahat Formasi** - Shaxsiy sayohat rejasi
- **Xizmatlar** - Taklif etiladigan yordamlar
- **FAQ** - Tez-tez so'raladigan savollar

---

## 🧩 Ishlatilgan Texnologiyalar

### Frontend:
- **🚀 Astro** - Zamonaviy web framework
- **📱 Responsive Design** - Mobil va desktop moslashuvi
- **🎨 CSS Grid & Flexbox** - Zamonaviy layout
- **⚡ TypeScript** - Tip xavfsizligi

### Ma'lumotlar Bazasi:
- **🗄️ Supabase** - Backend xizmati
- **📊 PostgreSQL** - Relatsion ma'lumotlar bazasi
- **🔐 Row Level Security** - Ma'lumotlar xavfsizligi

### Xususiyatlar:
- **🌐 i18n** - Ko'p tillilik
- **📱 PWA Ready** - Progressive Web App
- **🔍 SEO Optimized** - Qidiruv tizimlariga optimallashtirilgan
- **♿ Accessibility** - Maxsus ehtiyojlar uchun

---

## 🚀 Joylashtirish (Deployment)

### Sayt Manzili:
**🌐 [tripasia.uz](https://tripasia.uz)**

### Bolt.new'da Ishlash:
1. **Ko'rish**: Loyihani Bolt.new'da oching
2. **Tahrirlash**: Fayllarni to'g'ridan-to'g'ri tahrirlang
3. **Sinash**: O'zgarishlarni real vaqtda ko'ring
4. **Joylashtirish**: Avtomatik deploy

### Lokal Ishga Tushirish:
```bash
# Bog'liqliklarni o'rnatish
npm install

# Ishga tushirish
npm run dev

# Build qilish
npm run build
```

---

## 🛠️ Dasturchi Uchun Qo'llanma

### Yangi Sahifa Qo'shish:
1. `src/pages/[...lang]/` papkasida yangi `.astro` fayl yarating
2. `src/i18n/languages.ts`ga tarjimalar qo'shing
3. `Navigation.astro`ga yangi havola qo'shing

### Komponent Yaratish:
```astro
---
// src/components/YangiKomponent.astro
interface Props {
  title: string;
}
const { title } = Astro.props;
---

<div class="yangi-komponent">
  <h2>{title}</h2>
</div>

<style>
.yangi-komponent {
  /* CSS stillari */
}
</style>
```

### Tarjima Qo'shish:
```typescript
// src/i18n/languages.ts
export const ui = {
  es: {
    'yangi.kalit': 'Nuevo texto'
  },
  uz: {
    'yangi.kalit': 'Yangi matn'
  }
  // ...
}
```

### Ma'lumotlar Bazasi O'zgarishi:
1. `supabase/migrations/` papkasida yangi SQL fayl yarating
2. Migratsiya kodini yozing
3. Supabase'da qo'llang

### Stil Qo'shish:
- Har bir komponentda `<style>` bloki ishlatiladi
- Global stillar `src/layouts/Layout.astro`da
- CSS o'zgaruvchilar va responsive dizayn

---

## 📋 Fayl Tuzilmasi Tushunchasi

### Astro Sahifalari:
- `.astro` fayllar - Komponent + HTML + CSS + JS
- Frontmatter (---) - Server-side kod
- Template - HTML markup
- Style - CSS stillari
- Script - Client-side JavaScript

### Routing:
- `pages/` papkasi avtomatik routing yaratadi
- `[...lang]/` - Dynamic routing
- `index.astro` - Default sahifa

### Komponentlar:
- Qayta foydalaniladigan UI qismlari
- Props orqali ma'lumot uzatish
- Slot orqali kontent uzatish

---

## 🔧 Texnik Tafsilotlar

### Environment Variables:
```env
PUBLIC_SUPABASE_URL=your_supabase_url
PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### Build Process:
1. TypeScript kompilyatsiyasi
2. Astro sahifalarini yaratish
3. CSS optimizatsiyasi
4. Statik fayllarni yaratish

### Performance:
- Lazy loading rasmlar uchun
- CSS va JS minifikatsiyasi
- Gzip siqish
- CDN orqali statik fayllar

---

## 📞 Yordam va Qo'llab-quvvatlash

### Dasturchi Kontakti:
- **Email**: umidyusupov258@gmail.com
- **WhatsApp**: +998 91 021 60 01
- **Telegram**: @umidyusupov

### Hujjatlar:
- [Astro Documentation](https://docs.astro.build)
- [Supabase Docs](https://supabase.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## 🎯 Kelajak Rejalar

### Yangi Xususiyatlar:
- 🛒 **Booking System** - To'g'ridan-to'g'ri bron qilish
- 🗺️ **Interactive Maps** - Interaktiv xaritalar
- 💬 **Live Chat** - Jonli suhbat
- 📱 **Mobile App** - Mobil ilova
- 🎥 **Video Content** - Video kontent

### Texnik Yaxshilashlar:
- ⚡ **Performance** - Tezlikni oshirish
- 🔍 **SEO** - Qidiruv optimizatsiyasi
- ♿ **Accessibility** - Maxsus ehtiyojlar
- 🔐 **Security** - Xavfsizlikni kuchaytirish

---

**© 2024 Uzbekistán Cultural Guide - Ispaniyalik sayyohlar uchun O'zbekiston sayohat platformasi**