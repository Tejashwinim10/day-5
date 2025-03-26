const fs = require('fs').promises;

function processContent(content) {
    return content.split('').reverse().join(''); 
}

async function performFileOperations() {
    const inputFile = 'input.txt';
    const outputFile = 'output.txt';

    try {
        console.log(`Reading file: ${inputFile}`);
        const data = await fs.readFile(inputFile, 'utf8');
        console.log('File content read successfully:', data);

        const processedData = processContent(data);
        console.log('Processed content:', processedData);

        console.log(`Writing to file: ${outputFile}`);
        await fs.writeFile(outputFile, processedData);
        console.log(`Processed content written successfully to: ${outputFile}`);
    } catch (err) {
        console.error('Error during file operations:', err);
    }
}

// Execute the function
performFileOperations();
