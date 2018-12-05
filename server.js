// =============================================
// == Chargement des différents modules
// =============================================

const http = require('http')
const crypto = require('crypto')
const exec = require('child_process').exec
const config = require('./config.json')


// =============================================
// == Lancement du serveur
// =============================================
console.log('start')
http.createServer(function (req, res) {
  req.on('data', function (chunk) {
    for (i in config.processes) {
      if (req.url === config.processes[i].url) { // vérification de l'url
        const sig = 'sha1=' + crypto.createHmac('sha1', config.processes[i].secret).update(chunk.toString()).digest('hex');
        if (req.headers['x-hub-signature'] == sig) exec(config.processes[i].cmd) // vérification secret & execution déploiement
      }
    }
  })
  res.end()
}).listen(8081)
