var http = require('http')
var map = require('through2-map')

var port = Number(rocess.argv[2])

var server = http.createServer(function(request, response) {
    if (request.method !== 'POST') {
        return response.end('send me a POST\n')
    }
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(response)
})

server.listen(port)


// var http = require('http')
// var map = require('through2-map')

// var server = http.createServer(function (req, res) {
//     if (req.method !== 'POST') {
//     return res.end('send me a POST\n')
//     }

//     req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//     })).pipe(res)
// })

// server.listen(Number(process.argv[2]))