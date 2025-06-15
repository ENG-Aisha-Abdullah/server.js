import { createServer } from 'node:http';
import fs from 'fs';

const img = fs.readFileSync("public/js.png")

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'image/png' });
  res.end(img);
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});