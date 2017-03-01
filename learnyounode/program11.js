var fs = require('fs')
var http = require('http')

var port = process.argv[2]
var html = process.argv[3]

var server = http.createServer(function(request, response) {
    var stream = fs.createReadStream(html)
    stream.pipe(response)
})

server.listen(port)

// var http = require('http')
// var fs = require('fs')
// // var args = process.argv.slice(2)
// // var file = args[0]
// // var port = Number(args[1])
// var port = Number(process.argv[2])
// var file = process.argv[3]

// var server = http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'})
//     fs.createReadStream(file).pipe(res)
// })

// server.listen(port)