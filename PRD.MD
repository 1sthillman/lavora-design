# Lavora Design - Ürün Gereksinimleri Dokümanı (PRD)

**Versiyon:** 2.0  
**Hazırlanma Tarihi:** 16 Aralık 2025  
**Son Güncelleme:** 16 Aralık 2025  
**Öncelik:** Kritik - Üst Düzey Lüks Segment

---

## 1. Proje Genel Bakış

### 1.1 Vizyon
Lavora Design, Türkiye'nin premium mobilya segmentinde dijital dönüşümü temsil eden, sadece React tabanlı (JavaScript), ultra-modern, lüks ve profesyonel bir dijital showroom platformudur. Proje, kullanıcılara fiziksel mağaza deneyimini dijital ortamda yaşatmak için 3D görseller, yüksek kaliteli videolar, interaktif animasyonlar ve sorunsuz bir kullanıcı deneyimi sunmayı hedefler.

### 1.2 Misyon
- Premium mobilya koleksiyonlarını dijital ortamda sanal gerçeklik deneyimine yakın bir şekilde sergilemek
- Yöneticilere tam kontrol sağlayan, kod bilgisi gerektirmeyen admin paneli ile içerik yönetimini kolaylaştırmak
- Google arama sonuçlarında üst sıralarda yer alacak şekilde SEO mükemmelliği sağlamak
- Her cihazda ve platformda CEO uyumunu %100'e yakın seviyede tutmak

---

## 2. Hedef Kullanıcı Profili

### 2.1 Bireysel Premium Müşteriler
- **Demografi:** 28-60 yaş, A+ ekonomik segment, estetik ve yaşam tarzına önem veren
- **Teknik Yetkinlik:** Orta-üst seviye dijital okuryazarlık, akıllı ev teknolojilerine açık
- **Davranış:** %55 mobil, %40 desktop, %5 tablet; ortalama oturum süresi 4+ dakika
- **Gereksinim:** Hızlı ürün bulma, detaylı inceleme, 3D görüntüleme, proje bazlı danışmanlık talebi

### 2.2 İç Mimari Profesyonelleri
- **Segment:** İç mimar odaları, tasarım stüdyoları, proje müdürleri, luxury real estate developer'lar
- **Kullanım Amacı:** Toplu sipariş, özel proje teklifi, CAD dosyası indirme, showroom ziyareti planlama
- **Özellik İhtiyacı:** Teknik şemalar, ölçü detayları, BIM objeleri, proje portfolyo modülü, PDF katalog indirme

### 2.3 Yönetici Kullanıcılar (Admin Paneli)
- **Roller:** Ürün müdürü, dijital pazarlama uzmanı, grafik tasarımcı, e-ticaret yöneticisi
- **Yetkinlikler:** İçerik yükleme, SEO optimizasyonu, analiz takibi, kampanya yönetimi
- **Giriş Bilgileri:** adminlavora5@gmail.com / lavorasezer (ilk girişte zorunlu şifre değişikliği)

---

## 3. Temel Özellikler & Detaylı Fonksiyonlar

### 3.1 Ön Yüz (Frontend) - Genel Tasarım Sistemi

**3.1.1 Renk Paleti (Nardo Gri & Mat Siyah Lüks Konsept)**
- **Ana Renkler:**
  - Nardo Gri: `#6B6B6B` (primary), `#4A4A4A` (secondary), `#2E2E2E` (dark)
  - Mat Siyah: `#0A0A0A` (background), `#121212` (surface)
- **Vurgu Renkleri:**
  - Altın: `#D4AF37` (luxury accent), `#B8941F` (hover)
  - Beyaz: `#F5F5F5` (text on dark), `#FFFFFF` (pure)
- **Gradientler:**
  - Hero: `linear-gradient(135deg, #0A0A0A 0%, #2E2E2E 50%, #6B6B6B 100%)`
  - Button: `linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)`
  - Overlay: `rgba(10, 10, 10, 0.85)`

**3.1.2 Tipografi**
- **Başlık Fontu:** Playfair Display (700-900 weight) - Google Fonts
- **Body Fontu:** Montserrat (400-600 weight) - Google Fonts
- **Accent Fontu:** Cormorant Garamond (italic for quotes)
- **Font Boyutları:** 8px grid sistemi (16, 24, 32, 48, 64, 96px)

**3.1.3 Logo Tasarımı**
- **Ana Logo:** Modern minimalist "L" harfi, altın gradient içinde, 3D emboss efekti
- **Yazı Tipi:** "LAVORA DESIGN" - tüm büyük harfler, 4px letter-spacing
- **Kullanım:** Navbar'da sol üst, footer'da orta, favicon'da küçük versiyon

### 3.2 Ana Sayfa (/) - Detaylı Bölümler

**3.2.1 Hero Bölümü (Full-Screen Video Header)**
- **Video Özellikleri:** 4K 30fps, 20 saniye loop, muted, autoplay, WebM format
- **Content Overlay:** 
  - Başlık: "LAVORA DESIGN" (96px, üzerinde altın alt çizgi animasyonu)
  - Alt Başlık: "Ultra Premium Mobilya Koleksiyonları" (32px)
  - CTA Butonu: "Koleksiyonu Keşfet" (scroll to products)
- **Parallax Efekti:** Video 0.5x hızında kayar, text 1x
- **Scroll Indicator:** Altın ok, bounce animasyon, tıklayınca smooth scroll

**3.2.2 İstatistikler Sektörü (Animated Counters)**
- **Rakamlar (Düşükten Yükseğe Animasyon):**
  - "25+ Yıl" (0'dan 25'e 2 saniyede, + işareti fade-in)
  - "15.000+ Mutlu Müşteri" (0'dan 15000'e 2.5 saniyede)
  - "450+ Özel Tasarım" (0'dan 450'ye 2 saniyede)
  - "12 Uluslararası Ödül" (0'dan 12'ye 1.5 saniyede)
- **Trigger:** Intersection Observer API, sayfa ortasına gelince başlar
- **Font:** Playfair Display 700, 64px, altın renk

**3.2.3 Koleksiyonlar (Tıklanabilir Kategori Kartları)**
- **Kartlar:** 5 ana kategori (Salon, Yatak Odası, Mutfak, Ofis, Aydınlatma)
- **Görsel:** Her kategori için 2400x1600px görsel, hover'da zoom 1.1x
- **Animasyon:** 3D tilt efekti (perspective: 1000px, rotateX/Y: 10deg)
- **Link:** `/products?category=salon` gibi query string ile filtreleme

**3.2.4 Neden Lavora? (Özellikler)**
- **6 Özellik Kartı:** 
  - Özel Tasarım, El İşçiliği, Premium Malzeme, 3D Görüntüleme, Projeye Özel Çözümler, Global Teslimat
- **İkonlar:** Lucide React ikonları, 48px, altın renk
- **Hover:** Kart yükselir, border altın olur, ikon rotate 360deg

**3.2.5 Çalışma Sürecimiz (4 Adım)**
- **Adımlar:** Tasarım → Üretim → Kalite Kontrol → Teslimat
- **Görsel:** Her adım için custom illüstration, 400x400px
- **Animasyon:** Adım numarası yanıp söner, tıklanınca detay modal açar

### 3.3 Ürünler Sayfası (/products) - Detaylı Katalog

**3.3.1 Filtreleme & Arama Sistemi**
- **Filtre Türleri:**
  - Kategori: Multi-select checkbox (Salon, Mutfak, Yatak Odası, Ofis, Aydınlatma, Banyo, Antre)
  - Stil: Modern, Klasik, Avangard, Minimal, Endüstriyel
  - Malzeme: Ahşap, Metal, Cam, Mermer, Deri, Kumaş
  - Renk: Siyah, Gri, Beyaz, Altın, Kahverengi, Koyu Yeşil
- **Arama:** Debounced search (300ms delay), ürün adı ve açıklamada arama
- **Sıralama:** Yeniden Eskiye, Eskiden Yeniye, Alfabetik A-Z, Alfabetik Z-A

**3.3.2 Ürün Grid/Liste Görünümü**
- **Grid:** 4 kolon (desktop), 2 kolon (tablet), 1 kolon (mobil)
- **Kart İçeriği:** 
  - Görsel: 800x600px, WebP format, lazy loading
  - Başlık: 20px, Montserrat 600
  - Kısa Açıklama: 14px, 2 satır, metin sonu ...
  - Etiketler: "Yeni", "Özel Üretim", "Sınırlı Sayıda" gibi badge'ler
- **Liste Görünümü:** Yatay kart, sol da görsel (300x225px), sağda detaylar
- **Hover Efekti:** Kart yükselir (box-shadow: 0 20px 40px rgba(0,0,0,0.3)), görsel zoom 1.05x

**3.3.3 Ürün Detay Modal/Sayfa**
- **URL Yapısı:** `/products/{slug}` veya modal açma
- **Galeri:** Ana görsel 1200x900px, 8 thumbnail, tıklayınca lightbox (Fancybox)
- **Video:** Ürün tanıtım videosu (max 90 saniye), lazy load, playsinline
- **3D Model:** Three.js entegrasyonu, GLB format, fallback: 360° döndürme (24 fotoğraf)
- **Özellikler Tablosu:** Tabbed interface - Genel Bilgiler, Teknik Özellikler, Bakım Talimatları
- **Fiyat Yerine:** "Teklif Al" butonu, form açar (isim, email, telefon, proje detayı)
- **Sosyal Paylaşım:** WhatsApp, Instagram, Pinterest, Email (sharer.js)

### 3.4 Galeri Sayfası (/gallery) - Portfolyo Showcase

**3.4.1 Proje Kategorileri**
- **Filtreleme:** Salon Projeleri, Yatak Odası Projeleri, Mutfak Projeleri, Ofis Projeleri, Villa Projeleri
- **Görseller:** Her proje için 6-12 görsel, 2400x1600px, profesyonel fotoğrafçılık
- **Lightbox:** Swiper.js ile touch-friendly, zoom, pan, full-screen modu

**3.4.2 Video Bölümü**
- **Video Galerisi:** YouTube/Vimeo embed, custom play button (altın renk)
- **Kategoriler:** Montaj Videoları, Tasarım Süreci, Müşteri Yorumları
- **Lazy Loading:** Thumbnail üzerinde play icon, tıklanınca iframe yükler

### 3.5 Hakkımızda Sayfası (/about) - Marka Hikayesi

**3.5.1 Şirket Tarihçesi (Timeline)**
- **Yıllar:** 1998 Kuruluş, 2005 İlk Showroom, 2010 Uluslararası Pazarlama, 2018 Digital Dönüşüm, 2025 Lavora Design Launch
- **Görseller:** Her dönem için tarihi fotoğraflar, 600x400px
- **Animasyon:** Scroll ile çizgi çizilmesi, yıllar fade-in

**3.5.2 Değerlerimiz & Ekip**
- **Değerler:** Yenilikçilik, Kalite, Müşteri Odaklılık, Sürdürülebilirlik, Tasarım Mükemmelliği
- **Ekip:** CEO, Baş Tasarımcı, Üretim Müdürü, Satış Direktörü - fotoğraflar 400x400px, LinkedIn linkleri
- **Sertifikalar:** ISO 9001, Kalite Sertifikaları, Uluslararası Ödüller (PDF indirilebilir)

### 3.6 İletişim Sayfası (/contact) - Multi-Channel

**3.6.1 İletişim Formu**
- **Alanlar:** Ad Soyad (min 3 karakter), Email (regex validasyon), Telefon (mask: 0537 580 32 96), Konu (dropdown), Mesaj (min 20 karakter)
- **Validasyon:** Real-time hata mesajları, başarılı submitte teşekkür mesajı
- **Spam Koruması:** Google reCAPTCHA v3 (invisible), honeypot field

**3.6.2 Harita & Bilgiler**
- **Harita:** Leaflet.js, konum: 41.0200° N, 29.1900° E (Yukarı Dudullu Mah. Feza Sok. 4B, Ümraniye)
- **Pin:** Custom altın pin icon, popup: "Lavora Design Showroom"
- **Bilgiler:** 
  - Telefon: 0537 580 32 96 (tıklanınca tel: linki)
  - Email: info@lavoradesign.com (mailto link)
  - Adres: Yukarı Dudullu Mahallesi, Feza Sokak 4B, Ümraniye, İstanbul, Turkey 34000
  - Çalışma Saatleri: Pazartesi-Cuma 09:00-19:00, Cumartesi 10:00-18:00

**3.6.3 Sosyal Medya**
- **Instagram:** instagram.com/lavoradesign (yeni sekme)
- **LinkedIn:** linkedin.com/company/lavoradesign
- **Pinterest:** pinterest.com/lavoradesign
- **YouTube:** youtube.com/@lavoradesign

---

## 4. Admin Paneli (/admin) - Yetkilendirme & Yönetim

### 4.1 Giriş Sistemi
- **URL:** `/admin` (root dışında gizli, robots.txt'de disallow)
- **Kimlik Bilgileri:** adminlavora5@gmail.com / lavorasezer (ilk girişte zorunlu değişiklik)
- **Güvenlik:** 
  - JWT token, localStorage'da 24 saatlik session
  - 5 hatalı denemeden sonra 15 dakika IP ban (Rate Limiter)
  - HTTPOnly cookie desteği (sonraki versiyon)
  - 2FA opsiyonel (Google Authenticator)

### 4.2 Dashboard Ana Ekran
- **KPI Widgets:** 
  - Bugünkü Ziyaretçi (Google Analytics API)
  - Toplam Ürün Sayısı (DB'den)
  - Son 7 Gün Mesaj Sayısı (contact_form table)
  - Server Status: API Response Time < 200ms
- **Grafikler:** Recharts.js ile 30 günlük trafik, kategori satışları
- **Son İşlemler:** Son 5 yüklenen ürün (thumbnail, tarih), son 10 mesaj (okundu/okunmadı)

### 4.3 Ürün Yönetim Sistemi (CRUD)
- **Create:** 3 adımlı form wizard
  - Adım 1: Temel Bilgiler (Ad, Kategori, Stil, Açıklama)
  - Adım 2: Medya Yükleme (Drag & Drop, 10'ar batch, progress bar)
  - Adım 3: SEO & Yayınlama (Meta Title, Description, Durum: Taslak/Yayında)
- **Read:** Data Table (react-table), 50 ürün lazy load, search debounce 300ms, sortable columns
- **Update:** Inline editing (fiyat, stok) veya full edit modal
- **Delete:** Soft delete (deleted_at timestamp), 30 gün sonra permanent silme

### 4.4 Medya Yönetici (Media Library)
- **Dosya Türleri:** JPG, PNG (max 5MB), WebP (tercihen), MP4 (max 50MB, 1080p)
- **Compression:** Image - Sharp.js (max 80% kalite, 1200px genişlik), Video - FFmpeg (H.265 codec)
- **Klasör Yapısı:** `/uploads/products/{category_slug}/{product_id}/`, `/uploads/banners/`, `/uploads/videos/`
- **Otomatik İşlemler:** 
  - Thumbnail generation (200x200, 400x300, 800x600)
  - Video thumbnail (first frame)
  - EXIF data removal (gizlilik)
- **UI:** Grid view (200px thumbnail), list view (detaylar), drag reorder, bulk actions

### 4.5 Koleksiyon & Blog Yönetimi
- **Koleksiyonlar:** "2025 Modern Koleksiyon", "Luxury Villa Serisi" gibi gruplar
- **Blog:** Medium-style editor (react-quill), fotoğraf ekleme, slug otomatik oluşturma, yayın tarihi ayarlama
- **Sayfalar:** Hakkımızda, İletişim metinleri, Gizlilik Politikası, KVKK metni

---

## 5. Teknik Gereksinimler & Mimarisi

### 5.1 Frontend Teknoloji Yığını (Sadece React)
- **Framework:** React 19.1.0 (JavaScript, JSX - TypeScript yok)
- **Build Tool:** Vite 7.0.3 (HMR, fast refresh)
- **Styling:** 
  - Tailwind CSS 3.4.17 (utility-first)
  - CSS Modules (component-specific)
- **Animasyon:** 
  - Framer Motion 10+ (complex animations)
  - CSS Transitions (hover states)
  - Intersection Observer API (scroll animations)
- **Form Yönetimi:** React Hook Form 7+ (performance), Zod (validation schema)
- **API İletişimi:** Axios interceptors, React Query 5+ (data fetching)
- **UI Kütüphanesi:** Radix UI (headless, accessible), Lucide React (ikoner)

### 5.2 Backend Mimarisi (Henüz Olmayan - Plan)
- **API:** Node.js + Express 4.18+ veya Next.js 14+ (API Routes)
- **Database:** PostgreSQL 15 (relational data) + S3 Compatible Storage (medya dosyaları)
- **Cache:** Redis 7 (session management, rate limiting)
- **Authentication:** JWT + bcrypt, refresh token rotation, token blacklist
- **Rate Limiting:** 100 request/min IP başına (admin panel için 20 request/min)

### 5.3 Dosya Yapısı & Klasör Organizasyonu

```
lavora-design/
├── 📄 index.html
├── 📄 package.json
├── 📄 vite.config.js
├── 📄 tailwind.config.js
├── 📄 postcss.config.js
├── 📄 jsconfig.json (path aliases)
├── 📄 .env.example
├── 📄 .gitignore
├── 📁 public/
│   ├── 📁 uploads/
│   │   ├── 📁 products/
│   │   ├── 📁 banners/
│   │   └── 📁 videos/
│   └── 📄 .htaccess (for Apache)
├── 📁 src/
│   ├── 📄 main.jsx
│   ├── 📄 App.jsx
│   ├── 📄 index.css (global styles)
│   ├── 📁 router/
│   │   ├── 📄 index.js
│   │   └── 📄 config.jsx (routes)
│   ├── 📁 components/
│   │   ├── 📁 layout/
│   │   │   ├── 📄 Navbar.jsx
│   │   │   ├── 📄 Footer.jsx
│   │   │   └── 📄 Layout.jsx
│   │   ├── 📁 ui/
│   │   │   ├── 📄 Button.jsx
│   │   │   ├── 📄 Card.jsx
│   │   │   ├── 📄 Modal.jsx
│   │   │   └── 📄 Loading.jsx
│   │   ├── 📁 home/
│   │   │   ├── 📄 HeroSection.jsx
│   │   │   ├── 📄 StatsSection.jsx
│   │   │   └── 📄 Collections.jsx
│   │   ├── 📁 products/
│   │   │   ├── 📄 ProductGrid.jsx
│   │   │   ├── 📄 ProductCard.jsx
│   │   │   └── 📄 FilterPanel.jsx
│   │   ├── 📁 admin/
│   │   │   ├── 📄 LoginForm.jsx
│   │   │   ├── 📄 Dashboard.jsx
│   │   │   ├── 📄 ProductManager.jsx
│   │   │   └── 📄 MediaUploader.jsx
│   │   └── 📁 common/
│   │       ├── 📄 SEO.jsx
│   │       ├── 📄 Schema.jsx
│   │       └── 📄 Analytics.jsx
│   ├── 📁 pages/
│   │   ├── 📄 Home.jsx
│   │   ├── 📄 Products.jsx
│   │   ├── 📄 ProductDetail.jsx
│   │   ├── 📄 Gallery.jsx
│   │   ├── 📄 About.jsx
│   │   ├── 📄 Contact.jsx
│   │   ├── 📄 Login.jsx
│   │   └── 📄 Dashboard.jsx
│   ├── 📁 contexts/
│   │   ├── 📄 AuthContext.jsx
│   │   └── 📄 ProductContext.jsx
│   ├── 📁 hooks/
│   │   ├── 📄 useScrollAnimation.jsx
│   │   ├── 📄 useDebounce.jsx
│   │   └── 📄 useLocalStorage.jsx
│   ├── 📁 utils/
│   │   ├── 📄 api.js
│   │   ├── 📄 constants.js
│   │   └── 📄 helpers.js
│   └── 📁 styles/
│       ├── 📄 animations.css
│       └── 📄 admin.css
└── 📁 docs/
    ├── 📄 PRD.md (this file)
    └── 📄 DEPLOY.md
```

### 5.4 Performans Hedefleri (Core Web Vitals)
- **First Contentful Paint (FCP):** < 1.5 saniye
- **Largest Contentful Paint (LCP):** < 2.0 saniye
- **Cumulative Layout Shift (CLS):** < 0.05
- **Time to Interactive (TTI):** < 3.0 saniye
- **First Input Delay (FID):** < 100ms
- **Bundle Size:** Ana sayfa < 150KB gzip, Tüm sayfalar < 500KB

### 5.5 Tarayıcı Uyumluluğu
- **Modern:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Fallback:** IE11 için "Güncel tarayıcı kullanın" uyarı banner
- **Mobile:** iOS Safari 14+, Android Chrome 90+

---

## 6. UI/UX Tasarım Standartları

### 6.1 Animasyon & Etkileşim Kütüphanesi
- **Page Transitions:** @tanstack/react-router (smooth 300ms fade)
- **Micro-interactions:**
  - Buton: Scale 1.05, altın shadow elevation, ripple efekti (Framer Motion)
  - Kart: 3D tilt (perspective 1000px, rotateX/Y 10deg)
  - Input: Focus'ta label yukarı kayar, border altın olur
- **Scroll Animations:** 
  - Elements fade-up (opacity 0, translateY 50px → 0), 600ms duration
  - Parallax backgrounds (translateY: -50% → 50%)
  - Counter animations (Intersection Observer)
- **Loading States:** Skeleton screens (shimmer effect), progress bar

### 6.2 Mobil Tasarım Ölçütleri
- **Touch Targets:** Minimum 44x44px (Apple HIG, Material Design)
- **Gesture Support:**
  - Swipe left/right (ürün carousel)
  - Pinch to zoom (galeri lightbox)
  - Pull to refresh (admin panel)
- **Responsive Breakpoints:**
  - Mobile: 320px - 767px
  - Tablet: 768px - 1023px
  - Desktop: 1024px+
- **PWA:** Service Worker (offline mode), manifest.json, iOS splash screen

### 6.3 Erişilebilirlik (WCAG 2.1 AA)
- **Color Contrast:** Minimum 4.5:1 (text), 3:1 (large text)
- **Keyboard Navigation:** Tab index, skip links, focus ring
- **Screen Reader:** ARIA labels, semantic HTML, alt text for images
- **Reduced Motion:** `prefers-reduced-motion` media query desteği

---

## 7. Güvenlik Gereksinimleri

### 7.1 Admin Paneli Güvenliği
- **Giriş:** Zorlu şifre politikası (min 12 karakter, uppercase, lowercase, number, symbol)
- **Session:** 30 dakika inaktivite sonrası otomatik logout
- **CSRF:** Her POST request'te token, SameSite cookies
- **XSS:** DOMPurify ile tüm input sanitization
- **SQL Injection:** Parameterized queries (prepared statements)

### 7.2 Genel Güvenlik
- **HTTPS:** Tüm trafik SSL zorunlu, HSTS enabled (max-age=31536000)
- **Content Security Policy (CSP):**
  - `default-src 'self'`
  - `img-src 'self' data: https://*.amazonaws.com`
  - `script-src 'self' 'unsafe-inline'`
  - `style-src 'self' 'unsafe-inline'`
- **File Upload:**
  - MIME type kontrolü (magic numbers)
  - Virüs tarama (ClamAV API entegrasyonu)
  - Dosya boyutu limiti (5MB image, 50MB video)
  - Filename sanitization (no special chars)

---

## 8. SEO & Dijital Pazarlama Entegrasyonları

### 8.1 Teknik SEO (Search Engine Optimization)
- **Meta Tags:** Dinamik title (max 60 char), description (max 160 char), OG tags (Facebook, Twitter)
- **Structured Data (Schema.org):**
  ```json
  {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    "name": "Lavora Design",
    "address": {...},
    "geo": {...},
    "openingHours": "...",
    "telephone": "+90-537-580-32-96"
  }
  ```
- **Sitemap:** Otomatik XML sitemap, `/sitemap.xml`, günlük yenileme
- **Robots.txt:** Admin dizinleri disallow, medya dizinleri allow
- **Canonical URL:** Her sayfa için birincil URL tanımı (avoid duplicate content)
- **Breadcrumb:** Schema.org BreadcrumbList, visual breadcrumb navigasyon

### 8.2 Analytics & Tracking
- **Google Analytics 4 (GA4):** Enhanced Ecommerce, custom events (product_view, product_click, contact_submit)
- **Google Tag Manager:** Tüm piksel yönetimi (Facebook Pixel, LinkedIn Insight)
- **Hotjar:** Heatmap (clicks, scrolls), session recording (son 30 gün, anonim)
- **Search Console:** Index coverage, performance tracking, mobile usability
- **Yandex Metrica:** Rus pazarı için alternatif tracking

### 8.3 Sosyal Medya & Kampanyalar
- **Instagram Feed:** Basic Display API, son 12 post, fotoğraf + caption
- **Open Graph:** 
  - `og:image`: 1200x630px, Lavora logo ile
  - `og:title`: "Lavora Design - Ultra Premium Mobilya"
  - `og:description`: "Modern ve lüks mobilya koleksiyonlarımız ile yaşam alanlarınıza değer katın."
- **Twitter Card:** Summary Large Image

---

## 9. Başarı Metrikleri (KPI'lar)

### 9.1 Kullanıcı Deneyimi Metrikleri
- **Bounce Rate:** < 40% (hedef < 35%)
- **Session Duration:** Ortalama 4+ dakika
- **Pages per Session:** 6+
- **Mobile Conversion Rate:** Teklif formu submit > 2.5%
- **Form Completion Rate:** %85 (teknik hata < 5%)

### 9.2 Teknik Performans Metrikleri
- **API Response Time:** < 150ms (p95)
- **Uptime:** 99.9% (max 43 dakika ayda)
- **Error Rate:** < 0.05% (5xx hataları)
- **Lighthouse Score:** Performance > 90, Accessibility > 95, Best Practices > 95, SEO > 98
- **Bundle Size:** < 150KB gzip (home), < 500KB (admin)

### 9.3 İş Hedefleri Metrikleri
- **Lead Generation:** Aylık 750+ kalifiye lead (tekli)
- **Catalog Downloads:** 300+ PDF indirme/ay
- **Social Shares:** Ürün başına ortalama 25 paylaşım
- **Admin Verimliliği:** Ürün ekleme süresi < 4 dakika

---

## 10. Gelecek Yol Haritası (Roadmap)

### **V1.0 - Mevcut (Q1 2025)**
- ✅ Sadece React frontend (JavaScript)
- ✅ Admin panel (CRUD, medya yönetimi)
- ✅ Temel SEO & responsive design
- ✅ 45 ürün, 15 galeri projesi

### **V1.1 - Enhancement (Q2 2025)**
- 🚧 Node.js + Express backend (admin API)
- 🚧 PostgreSQL database
- 🚧 JWT authentication (refresh token)
- 🚧 3D model viewer (Three.js)

### **V1.2 - Advanced Features (Q3 2025)**
- 🚧 AR (Augmented Reality) ürün görüntüleme (iOS/Android)
- 🚧 AI Chatbot (OpenAI GPT-4, ürün öneri)
- 🚧 Salon tasarım randevu sistemi (Calendly entegrasyonu)

### **V1.3 - B2B & Scale (Q4 2025)**
- 🚧 B2B modülü (bayi girişi, toplu fiyatlandırma, CSV import/export)
- 🚧 Dashboard analytics (PowerBI embed)
- 🚧 Multi-language (Arapça, Rusça, İngilizce)
- 🚧 PWA (offline mode, push notifications)

---

## 11. Riskler & Mitigasyon Stratejileri

| Risk | Olasılık | Etki | Mitigasyon |
|------|----------|------|------------|
| Büyük medya dosyaları yavaşlatır | Yüksek | Kritik | Otomatik compression, CDN (AWS CloudFront), WebP format, lazy loading |
| XSS/Injection saldırıları | Düşük | Kritik | Input sanitization, CSP, DOMPurify, regex validation |
| SEO başarısızlığı | Orta | Yüksek | Sürekli audit (Screaming Frog), internal linking, schema markup, blog content |
| Tarayıcı uyumsuzluğu | Orta | Orta | Feature detection, polyfill'ler, fallback UI |
| Admin panel brute force | Düşük | Kritik | Rate limiting (20 req/min), 2FA, IP whitelist, fail2ban |
| Server downtime | Düşük | Yüksek | Vercel/Netlify (99.99% uptime), backup (daily), rollback plan |
| Başlıca dependency vulnerabilities | Orta | Orta | `npm audit` weekly, Dependabot, `npm outdated` kontrolü |

---

## 12. Ekipler & Sorumluluklar

| Rol | Sorumluluk | Teknoloji | Zaman Dilimi |
|-----|------------|-----------|--------------|
| **Proje Yöneticisi** | Timeline, milestone, client communication | Jira, Slack | Full-time |
| **Frontend Developer** | React uygulaması, performans, animasyon | React, Vite, Tailwind, Framer Motion | 3-4 ay |
| **UI/UX Designer** | Wireframe, mockup, prototype, logo | Figma, Adobe XD, Illustrator | 2-3 ay |
| **Backend Developer** | API, database, security, authentication | Node.js, Express, PostgreSQL, Redis | 2-3 ay (V1.1) |
| **DevOps Engineer** | Deploy, CI/CD, monitoring, CDN | Vercel, AWS, GitHub Actions | 1 ay (sonra part-time) |
| **İçerik Yöneticisi** | Ürün fotoğrafları, SEO metinleri, blog | Photoshop, Yoast SEO, GA4 | Part-time |
| **QA Tester** | Manual test, browser testing, performance | Lighthouse, Cypress, BrowserStack | 1 ay |

---

## 13. GitHub Entegrasyonu & Deploy Notları

### 13.1 GitHub Push Sorunu
- **Durum:** Readdy.ai platformu doğrudan `git push` komutlarını çalıştıramaz
- **Çözüm:** 
  1. Readdy.ai'dan proje dosyalarını indir (Export/Download)
  2. Local terminal'de `git init` ve `git remote add origin [URL]`
  3. `git add .`, `git commit -m "Initial commit"`, `git push -u origin main`
- **Authentication:** GitHub Personal Access Token (PAT) kullanımı önerilir

### 13.2 CI/CD Pipeline (GitHub Actions)
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

### 13.3 Hosting Tercihleri
- **Frontend:** Vercel (önerilen), Netlify, AWS S3 + CloudFront
- **Backend (V1.1):** Railway, Render, AWS EC2
- **Database:** Supabase (free tier), Neon.tech (serverless PostgreSQL)
- **Medya:** AWS S3, Cloudinary, Imgix

---

## 14. Dosya Yapısı Detayı

### 14.1 Önemli Dosyalar
- **package.json:** Dependencies, scripts, version
- **vite.config.js:** Build configuration, proxy settings, plugins
- **tailwind.config.js:** Custom colors, fonts, breakpoints
- **jsconfig.json:** Path aliases (`@/components`, `@/pages`)

### 14.2 Medya Yükleme Yapısı
```
public/uploads/
├── products/
│   ├── salon-modern-01/
│   │   ├── main.webp (800x600)
│   │   ├── gallery/
│   │   │   ├── 01.webp (1200x900)
│   │   │   └── 02.webp
│   │   └── thumbnails/
│   │       ├── 01_200x150.webp
│   │       └── 02_200x150.webp
│   └── mutfak-minimal-05/
├── banners/
│   ├── hero-video.mp4 (4K, 20s)
│   └── slider-01.jpg (1920x1080)
└── videos/
    └── product-demos/
        ├── demo-01.webm (1080p, 90s)
        └── demo-02.webm
```

---

## 15. Ek Notlar & Öneriler

### 15.1 Fotoğraf & Video Kalitesi
- **Ürün Fotosu:** 300 DPI, 2400x1800px minimum, profesyonel ışık, beyaz arka plan
- **Video:** 4K 30fps, tripod sabitleme, 360° döndürme (24 fotoğraf, her 15 derece)
- **Drone Görsel:** Showroom ve fabrika için 4K drone footage
- **360° Panorama:** Google Street View style showroom turu

### 15.2 SEO İçerik Stratejisi
- **Blog:** Haftada 1 makale (1000+ kelime), keyword research (Ahrefs), internal linking
- **Kategoriler:** Her kategori için 300+ kelime açıklama, H2/H3 headings
- **Ürün Açıklamaları:** Unique content, 200+ kelime, bullet points, technical specs

### 15.3 Yasal Uyumluluk
- **KVKK:** Cookie consent banner (Opt-in), veri işleme aydınlatma metni
- **Gizlilik Politikası:** Detaylı page, tüm trackingler belirtilmiş
- **Çerezler:** Essential, Analytics, Marketing kategorileri, kullanıcı seçimi
- **Terms of Service:** Telif hakları, kullanım koşulları

### 15.4 Backup & Monitoring
- **Daily Backup:** Tüm medya dosyaları, database (automated to S3 glacier)
- **Uptime:** UptimeRobot (5 dakika aralık), PagerDuty (kritik hatalarda SMS)
- **Error Tracking:** Sentry.io (source maps ile), LogRocket (session replay)

### 15.5 Gelişmiş Özellikler (Future)
- **Voice Search:** Ürün arama (Web Speech API)
- **Chatbot:** WhatsApp Business API integration (otomatik yanıt)
- **VR Showroom:** WebXR API ile sanal gerçeklik deneyimi
- **NFT:** Özel tasarım mobilyalar için dijital sertifika (Polygon blockchain)

---

## 16. Onay Akışı & Gözden Geçirme

### 16.1 Review Süreci
- **Internal Review:** Frontent dev → Designer → PM (her Cuma)
- **Client Review:** Haftalık demo, feedback toplama (Google Forms)
- **User Testing:** 5 gerçek kullanıcı, think-aloud protocol, Hotjar recording

### 16.2 Kabul Kriterleri (Definition of Done)
- [ ] Tüm sayfalar mobile responsive (Chrome DevTools test)
- [ ] Lighthouse score > 90 (Performance, Accessibility, SEO)
- [ ] Admin panelde 50 ürün ekleme testi (sub-5 minute)
- [ ] Form submission test (email arrives < 5 seconds)
- [ ] Cross-browser test (Chrome, Firefox, Safari, Edge)
- [ ] Security audit (npm audit, OWASP ZAP)
- [ ] SEO checklist (meta tags, schema, sitemap, robots.txt)
- [ ] Documentation complete (README, PRD, Deploy guide)

---

**Onaylayanlar:**  
[Frontend Lead] - [UI/UX Designer] - [PM]  
[Tarih] - [İmza/Dijital Onay]

---

*Bu PRD, proje kapsamını netleştirmek ve tüm paydaşların aynı sayfada olmasını sağlamak için hazırlanmıştır. Tüm değişiklikler git commit mesajları ile versiyon kontrolü altında takip edilmelidir.*