// Winziger Server nur zum lokalen Anschauen (crypto.subtle braucht http/https, nicht file://).
const http = require('http'), fs = require('fs'), path = require('path');
http.createServer((req, res) => {
  const datei = req.url === '/' ? 'index.html' : req.url.split('?')[0].slice(1);
  const p = path.join(__dirname, datei);
  if (!p.startsWith(__dirname) || !fs.existsSync(p)) { res.writeHead(404); return res.end('nix'); }
  res.writeHead(200, { 'Content-Type': datei.endsWith('.html') ? 'text/html; charset=utf-8' : 'text/plain' });
  res.end(fs.readFileSync(p));
}).listen(4321, () => console.log('http://localhost:4321'));
