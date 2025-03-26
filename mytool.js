const fs = require('fs');
const path = require('path');

const directoryName = 'newdirectory22';
const directoryPath = path.join(process.cwd(), directoryName);

try {
    if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath);
        console.log(`Directory created successfully: ${directoryName}`);
    } else {
        console.log(`Directory already exists: ${directoryName}`);
    }
} catch (err) {
    console.error('Error creating directory:', err);
}

try {
    if (fs.existsSync(directoryPath)) {
        fs.rmdirSync(directoryPath); // For Node.js 16+, use fs.rmSync(directoryPath, { recursive: true })
        console.log(`Directory removed successfully: ${directoryName}`);
    } else {
        console.log(`Directory not found: ${directoryName}`);
    }
} catch (err) {
    console.error('Error removing directory:', err);
}
