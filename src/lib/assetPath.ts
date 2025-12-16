/**
 * Asset path helper for GitHub Pages base path
 * Ensures all images, videos, and static assets use correct base path
 */

// Vite automatically injects BASE_URL from the 'base' config
const BASE_PATH = import.meta.env.BASE_URL;

// Debug: Log BASE_PATH on initialization
console.log('[AssetPath] BASE_PATH:', BASE_PATH);

/**
 * Convert relative asset path to absolute path with base URL
 * @param path - Relative path like "/images/photo.jpg"
 * @returns Absolute path like "/lavora-design/images/photo.jpg"
 */
export function getAssetPath(path: string): string {
    // If path already includes base path, return as is
    if (path.startsWith(BASE_PATH)) {
        console.log('[AssetPath] Path already has base:', path);
        return path;
    }
    
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    
    // Combine base path with asset path
    const fullPath = BASE_PATH.endsWith('/') 
        ? `${BASE_PATH}${cleanPath}` 
        : `${BASE_PATH}/${cleanPath}`;
    
    console.log('[AssetPath] Input:', path, '→ Output:', fullPath);
    return fullPath;
}

/**
 * Helper for image paths
 */
export function getImagePath(path: string): string {
    return getAssetPath(path);
}

/**
 * Helper for video paths
 */
export function getVideoPath(path: string): string {
    return getAssetPath(path);
}

export default getAssetPath;

