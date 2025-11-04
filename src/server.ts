import * as http from "http";
import * as fs from "fs";
import * as path from "path";

const server = http.createServer((req, res) => {
  if (req.url === "/view-image") {
    const imagePath = path.join(__dirname, "images", "veryhappydog.jpg");

    fs.readFile(imagePath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("Image not found");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "image/jpeg");
        res.end(data);
      }
    });
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Welcome to Node.js File System!</h1>");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/view-image`);
});
