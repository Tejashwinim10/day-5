const fs = require("fs");
const path = require("path");

if (process.argv.length < 3) {
    console.log("Please provide the file path as a command-line argument.");
    process.exit(1);
}

const filePath = process.argv[2];

const resolvedPath = path.resolve(filePath);

if (!fs.existsSync(resolvedPath)) {
    console.log(`File not found: ${resolvedPath}`);
    process.exit(1);
}

fs.stat(resolvedPath, (err, stats) => {
    if (err) {
        console.error("Error reading file statistics:", err.message);
        process.exit(1);
    }

    console.log(`File Statistics for: ${resolvedPath}`);
    console.log(`Size: ${stats.size} bytes`);
    console.log(`Creation Date: ${stats.birthtime}`);
    console.log(`Last Modified Date: ${stats.mtime}`);
});
