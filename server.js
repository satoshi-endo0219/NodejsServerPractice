import fs from "fs";
import http from "http";

const hostname = "localhost";

const port = 8000;

const server = http.createServer((request, response) => {
    fs.readFile("index.html", (err, data) => {
        if (err) {
            response.statusCode = 404;
            response.setHeader("Content-Type", "text/plain");
            response.end("File not found");
        } else {
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/html");
            response.write(data);
            response.end();
        }
    });
});

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
