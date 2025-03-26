const fs = require("fs");
const path = require("path");

function traverseDirectory(directoryPath) {
    const items = fs.readdirSync(directoryPath);

    items.forEach(item => {
        const fullPath = path.join(directoryPath, item);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            console.log(`Directory: ${fullPath}`);
            traverseDirectory(fullPath);
        } else {
            console.log(`File: ${fullPath}`);
        }
    });
}
const directoryPath = process.argv[2];

if (!directoryPath) {
    console.log("Please provide a directory path as a command-line argument.");
    process.exit(1);
}

if (!fs.existsSync(directoryPath)) {
    console.log(`Directory not found: ${directoryPath}`);
    process.exit(1);
}
console.log(`Traversing directory: ${directoryPath}`);
traverseDirectory(directoryPath);
