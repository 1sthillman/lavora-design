// Instagram Post Scraper - Build Time
// Bu script build sırasında çalışır ve Instagram post URL'lerini çeker

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INSTAGRAM_USERNAME = 'lavoradesing';
const OUTPUT_FILE = path.join(__dirname, '../src/data/instagram-posts.json');

/**
 * Instagram'ın public HTML'inden post URL'lerini çıkarır
 */
function scrapeInstagramPosts() {
    return new Promise((resolve, reject) => {
        const url = `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;

        https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        }, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    // Instagram'ın shared data JSON'ını bul
                    const regex = /<script type="application\/ld\+json">(.+?)<\/script>/g;
                    const matches = data.match(regex);

                    if (!matches) {
                        console.warn('⚠️  Instagram verisi bulunamadı. Fallback data kullanılacak.');
                        resolve([]);
                        return;
                    }

                    // Post URL'lerini çıkar
                    const posts = [];
                    const urlRegex = /https:\/\/www\.instagram\.com\/p\/([A-Za-z0-9_-]+)\//g;
                    const reelRegex = /https:\/\/www\.instagram\.com\/reel\/([A-Za-z0-9_-]+)\//g;
                    
                    let match;
                    const foundUrls = new Set();

                    // Post URL'lerini topla
                    while ((match = urlRegex.exec(data)) !== null) {
                        const url = match[0];
                        if (!foundUrls.has(url)) {
                            foundUrls.add(url);
                            posts.push({
                                id: match[1],
                                url: url,
                                type: 'post'
                            });
                        }
                    }

                    // Reel URL'lerini topla
                    while ((match = reelRegex.exec(data)) !== null) {
                        const url = match[0];
                        if (!foundUrls.has(url)) {
                            foundUrls.add(url);
                            posts.push({
                                id: match[1],
                                url: url,
                                type: 'reel'
                            });
                        }
                    }

                    console.log(`✅ ${posts.length} Instagram URL çıkarıldı!`);
                    resolve(posts.slice(0, 12)); // İlk 12'sini al

                } catch (error) {
                    console.error('❌ Parse hatası:', error.message);
                    resolve([]);
                }
            });

        }).on('error', (error) => {
            console.error('❌ Instagram\'a bağlanılamadı:', error.message);
            resolve([]);
        });
    });
}

/**
 * Main function
 */
async function main() {
    console.log('🔍 Instagram post URL\'leri çekiliyor...');
    console.log(`📱 Hesap: @${INSTAGRAM_USERNAME}`);

    const posts = await scrapeInstagramPosts();

    if (posts.length === 0) {
        console.warn('⚠️  Hiç post bulunamadı. Fallback data kullanılacak.');
    }

    // JSON dosyasına kaydet
    const data = {
        username: INSTAGRAM_USERNAME,
        fetchedAt: new Date().toISOString(),
        posts: posts
    };

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`✅ ${posts.length} post kaydedildi: ${OUTPUT_FILE}`);
    console.log('✨ Build tamamlandığında bu post\'lar carousel\'de görünecek!');
}

main().catch(console.error);

