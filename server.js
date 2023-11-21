import fs from "fs";
import https from "https";

const hostname = "localhost";

const port = 8000;

const options = {
    key: fs.readFileSync("./localhttps_key.pem"),
    cert: fs.readFileSync("./localhttps_cert.pem"),
};

const server = https.createServer(options, (request, response) => {
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
    console.log(`Server running at https://${hostname}:${port}/`);
});
