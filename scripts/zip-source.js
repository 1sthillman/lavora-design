import AdmZip from 'adm-zip';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

async function createSourceZip() {
    console.log('📦 Kaynak kodu paketleniyor...');

    try {
        const zip = new AdmZip();
        const outputPath = path.join(rootDir, 'public', 'lavora-source.zip');

        // Add specific folders
        zip.addLocalFolder(path.join(rootDir, 'src'), 'src');
        zip.addLocalFolder(path.join(rootDir, 'public'), 'public', (filename) => !filename.endsWith('.zip')); // Avoid recursion

        // Add specific config files
        const configFiles = [
            'package.json',
            'vite.config.js',
            'tailwind.config.js',
            'postcss.config.js',
            'jsconfig.json',
            'index.html',
            'README.md'
        ];

        configFiles.forEach(file => {
            const filePath = path.join(rootDir, file);
            if (fs.existsSync(filePath)) {
                zip.addLocalFile(filePath);
            }
        });

        // Write zip
        zip.writeZip(outputPath);
        console.log(`✅ Kaynak kod başarıyla oluşturuldu: ${outputPath}`);

    } catch (error) {
        console.error('❌ Zip oluşturma hatası:', error);
    }
}

createSourceZip();
