// Instagram Basic Display API Service
// https://developers.facebook.com/docs/instagram-basic-display-api

interface InstagramMedia {
    id: string;
    caption?: string;
    media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
    media_url: string;
    thumbnail_url?: string;
    permalink: string;
    timestamp: string;
}

interface InstagramApiResponse {
    data: InstagramMedia[];
    paging?: {
        cursors: {
            before: string;
            after: string;
        };
        next?: string;
    };
}

// ================================================
// 🔑 ACCESS TOKEN'INIZI BURAYA YAPIŞTıRıN
// ================================================
// 
// Nasıl alınır:
// 1. https://developers.facebook.com/ → Giriş yapın
// 2. "My Apps" → "Lavora Instagram Feed" (veya app adınız)
// 3. "Instagram Basic Display" → "User Token Generator"
// 4. Token'ı kopyalayın ve aşağıya yapıştırın
//
const INSTAGRAM_ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN_HERE'; // <-- BURAYA YAPIŞTıRıN

// Instagram User ID (otomatik alınacak)
let cachedUserId: string | null = null;

/**
 * Instagram'dan kullanıcı ID'sini alır
 */
async function getUserId(): Promise<string> {
    if (cachedUserId) return cachedUserId;

    try {
        const response = await fetch(
            `https://graph.instagram.com/me?fields=id,username&access_token=${INSTAGRAM_ACCESS_TOKEN}`
        );

        if (!response.ok) {
            throw new Error('Instagram API: Kullanıcı bilgisi alınamadı');
        }

        const data = await response.json();
        cachedUserId = data.id;
        return data.id;
    } catch (error) {
        console.error('Instagram User ID alınamadı:', error);
        throw error;
    }
}

/**
 * Instagram'dan son medyaları çeker
 * @param limit Kaç tane post çekilecek (varsayılan: 12)
 */
export async function fetchInstagramMedia(limit: number = 12): Promise<InstagramMedia[]> {
    try {
        // Token kontrolü
        if (!INSTAGRAM_ACCESS_TOKEN || INSTAGRAM_ACCESS_TOKEN === 'YOUR_ACCESS_TOKEN_HERE') {
            console.warn('⚠️ Instagram Access Token ayarlanmamış! Lütfen src/services/instagramService.ts dosyasında ACCESS_TOKEN\'ı güncelleyin.');
            return [];
        }

        // User ID al
        const userId = await getUserId();

        // Medyaları çek
        const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';
        const url = `https://graph.instagram.com/${userId}/media?fields=${fields}&limit=${limit}&access_token=${INSTAGRAM_ACCESS_TOKEN}`;

        const response = await fetch(url);

        if (!response.ok) {
            const error = await response.json();
            console.error('Instagram API Hatası:', error);
            throw new Error(`Instagram API: ${error.error?.message || 'Bilinmeyen hata'}`);
        }

        const data: InstagramApiResponse = await response.json();

        // Başarılı!
        console.log(`✅ Instagram'dan ${data.data.length} post çekildi!`);
        return data.data;

    } catch (error) {
        console.error('Instagram medya çekilemedi:', error);
        return []; // Hata durumunda boş array döndür
    }
}

/**
 * Instagram medyasını app formatına dönüştürür
 */
export function convertToAppFormat(media: InstagramMedia): {
    id: string;
    embedUrl: string;
    thumbnailUrl: string;
    caption: string;
    type: 'post' | 'reel';
} {
    const isVideo = media.media_type === 'VIDEO';
    const caption = media.caption || 'Instagram Post';

    return {
        id: media.id,
        embedUrl: media.permalink,
        thumbnailUrl: media.thumbnail_url || media.media_url,
        caption: caption.length > 100 ? caption.substring(0, 97) + '...' : caption,
        type: isVideo ? 'reel' : 'post'
    };
}

/**
 * Access token'ın geçerliliğini kontrol eder
 */
export async function validateAccessToken(): Promise<boolean> {
    try {
        if (!INSTAGRAM_ACCESS_TOKEN || INSTAGRAM_ACCESS_TOKEN === 'YOUR_ACCESS_TOKEN_HERE') {
            return false;
        }

        const response = await fetch(
            `https://graph.instagram.com/me?fields=id&access_token=${INSTAGRAM_ACCESS_TOKEN}`
        );

        return response.ok;
    } catch {
        return false;
    }
}

