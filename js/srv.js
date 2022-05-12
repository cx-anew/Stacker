var http = require('http')
var d = require('./test/date')

http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write('Modul: '+d.DateTime()+'<br>URL:'+req.url)
    res.end()
}).listen(8080)