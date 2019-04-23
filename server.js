/* eslint-disable no-console */
const http = require('http');
const crypto = require('crypto');
const { exec } = require('child_process');
const config = require('./config.json');

// gets the time in a custom format
function addZero(i) {
  return i < 10 ? `0${i}` : i;
}
function getTime() {
  const d = new Date();
  const h = addZero(d.getHours());
  const m = addZero(d.getMinutes());
  const s = addZero(d.getSeconds());
  return `${h}:${m}:${s}`;
}

// Starting the server
http.createServer((req, res) => {
  let chunk;
  let body = [];

  req.on('data', (data) => {
    chunk = data;
    body.push(data);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    config.processes.forEach((process) => {
      if (req.url === process.url) {
        body = JSON.parse(decodeURIComponent(body));
        if (body.ref === process.branch) {
          const sig = `sha1=${crypto.createHmac('sha1', process.secret).update(chunk.toString()).digest('hex')}`;
          if (req.headers['x-hub-signature'] === sig) {
            exec(process.cmd);
            console.log(`${getTime()} Successfully deployed branch ${body.ref} from ${req.url}!`);
          }
        }
      }
    });
  });

  res.end();
}).listen(config.app.port);

console.log(`================================\n${getTime()} => Server started on port: ${config.app.port}`);
