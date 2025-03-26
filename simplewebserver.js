const http = require('http');

const PORT = 4000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.writeHead(200);
        res.end('<h1>Welcome to the Home Page</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200);
        res.end('<h1>About Us</h1><p>This is the about page.</p>');
    } else if (req.url === '/contact') {
        res.writeHead(200);
        res.end('<h1>Contact Us</h1><p>Email: tejashwiniat1123@gmail.com</p>');
    } else {
        res.writeHead(404);
        res.end('<h1>404 - Page Not Found</h1>');
    }
});

server.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});