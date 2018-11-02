// =============================================
// == Chargement des différents modules
// =============================================

const http = require('http')
const crypto = require('crypto')
const exec = require('child_process').exec


// =============================================
// == Variables utiles
// =============================================

const token = require('token.js')
const repo = '/home/arthur/web/arthurdufour.com'


// =============================================
// == Lancement du serveur
// =============================================

http.createServer(function (req, res) {
  req.on('data', function (chunk) {
    let sig = 'sha1=' + crypto.createHmac('sha1', token.secret).update(chunk.toString()).digest('hex');

    if (req.headers['x-hub-signature'] == sig) {
      exec('cd ' + repo + ' && git pull');
    }
  });

  res.end();
}).listen(8081);
