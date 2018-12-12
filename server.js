const http = require('http');
const crypto = require('crypto');
const exec = require('child_process').exec;
const config = require('./config.json');


/**
 * Fonctions utiles
 */
function getTime() {
    const d = new Date();
    const h = addZero(d.getHours());
    const m = addZero(d.getMinutes());
    const s = addZero(d.getSeconds());
    return `${h}:${m}:${s}`;
}

function addZero(i) {
    if (i < 10) i = "0" + i;
    return i;
}


/**
 * Lancement du serveur
 */
http.createServer(function (req, res) {

    var chunk;
    var body = [];

    req.on('data', (data) => {
        chunk = data;
        body.push(data);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        for (i in config.processes) {
            if (req.url === config.processes[i].url) {
                body = JSON.parse(decodeURIComponent(body).substr(8));
                if (body.ref === config.processes[i].branch) {
                    const sig = 'sha1=' + crypto.createHmac('sha1', config.processes[i].secret).update(chunk.toString()).digest('hex');
                    if (req.headers['x-hub-signature'] == sig) {
                        exec(config.processes[i].cmd);
                        console.log(`${getTime()} Successfully deployed branch ${body.ref} from ${req.url}!`);
                    }
                }
            }
        }
    });

    res.end();
}).listen(config.app.port);
console.log(`================================\n${getTime()} => Server started on port: ${config.app.port}`);
