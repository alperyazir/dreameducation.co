const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  try {
    // Read the SVG file
    const svgBuffer = fs.readFileSync(path.join(process.cwd(), 'public', 'round-favicon.svg'));
    
    // Convert SVG to PNG with different sizes
    const sizes = [16, 32, 48, 64, 128, 256];
    const pngBuffers = await Promise.all(
      sizes.map(size => 
        sharp(svgBuffer)
          .resize(size, size)
          .png()
          .toBuffer()
      )
    );

    // Write the favicon.ico file
    const outputPath = path.join(process.cwd(), 'src', 'app', 'favicon.ico');
    fs.writeFileSync(outputPath, Buffer.concat(pngBuffers));

    console.log('Favicon generated successfully!');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon(); 