# GitHub Pages Deployment Talimatları

## Sorun
Site yayınlanıyor ancak beyaz ekran görünüyor. Console'da 404 hataları var.

## Çözüm

### 1. GitHub Repository Settings'i Düzelt

1. https://github.com/1sthillman/lavora-design/settings/pages adresine git
2. **Build and deployment** bölümünde:
   - **Source**: `GitHub Actions` seçili olmalı (ÖNEMLİ!)
   - Eğer "Deploy from a branch" seçiliyse, **mutlaka** "GitHub Actions" olarak değiştir
3. Save/Kaydet

### 2. GitHub Actions'ı Kontrol Et

1. https://github.com/1sthillman/lavora-design/actions adresine git
2. "Deploy to GitHub Pages" workflow'unu kontrol et
3. Eğer başarısız olduysa:
   - Hata loglarını oku
   - "Re-run all jobs" butonuna tıkla

### 3. Manuel Tetikleme

1. https://github.com/1sthillman/lavora-design/actions/workflows/deploy.yml adresine git
2. "Run workflow" butonuna tıkla
3. Branch: `main` seç
4. "Run workflow" onaylayıp başlat

### 4. Build Doğrulama

Workflow tamamlandıktan sonra:
- Site: https://1sthillman.github.io/lavora-design/
- Cache temizle: Ctrl+Shift+R (Windows) veya Cmd+Shift+R (Mac)
- Console kontrol: F12 → Console (hata olmamalı)

## Teknik Detaylar

### Base Path
- Repository: `/lavora-design/`
- Tüm asset path'leri: `/lavora-design/assets/...`

### Deployment Metodu
- Yeni: GitHub Actions (actions/deploy-pages@v4)
- Eski (artık kullanılmıyor): gh-pages branch

### Kritik Dosyalar
- `.github/workflows/deploy.yml`: Workflow yapılandırması
- `vite.config.ts`: Base path ayarı
- `out/.nojekyll`: Jekyll'i devre dışı bırakır

## Hata Çözümleri

### "Deploy from a branch" seçili
**Sorun**: GitHub Pages eski gh-pages branch'inden deploy etmeye çalışıyor.
**Çözüm**: Settings → Pages → Source → "GitHub Actions" seç

### Asset 404 hataları
**Sorun**: Base path yanlış veya workflow doğru çalışmamış.
**Çözüm**: Workflow'u manuel tetikle, Settings'i kontrol et

### Workflow başarısız
**Sorun**: Build hatası veya permission sorunu.
**Çözüm**: Actions sekmesinde hata loglarını oku, gerekirse permission'ları kontrol et

