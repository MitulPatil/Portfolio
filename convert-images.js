// Image Conversion Script
// Run: node convert-images.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('\n⚠️  CRITICAL: Your images are too large!');
console.log('chatapp.png: 1.5MB - Should be < 100KB');
console.log('mrdhobi.png: 745KB - Should be < 100KB\n');

console.log('✅ Converting images to WebP...\n');

const inputDir = path.join(__dirname, 'public', 'projects');
const files = fs.readdirSync(inputDir);

const convertImages = async () => {
  for (const file of files) {
    if (file.match(/\.(png|jpg|jpeg)$/i)) {
      const input = path.join(inputDir, file);
      const output = path.join(inputDir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
      
      try {
        await sharp(input)
          .resize(800, null, { withoutEnlargement: true })
          .webp({ quality: 75 })
          .toFile(output);
        
        const inputSize = fs.statSync(input).size / 1024;
        const outputSize = fs.statSync(output).size / 1024;
        console.log(`✅ ${file} → ${path.basename(output)}`);
        console.log(`   ${inputSize.toFixed(2)}KB → ${outputSize.toFixed(2)}KB (${((1 - outputSize/inputSize) * 100).toFixed(1)}% smaller)\n`);
      } catch (err) {
        console.error(`❌ Error converting ${file}:`, err.message);
      }
    }
  }
  
  console.log('\n✅ Conversion complete! Update your image paths to use .webp');
};

convertImages();

