var http = require('http')
var url = require('url')

var port = Number(process.argv[2])

var server = http.createServer(function(request, response) {
    if (request.method !== 'GET') {
        return response.end('send me a GET\n')
    }
    
    var res
    var parsedUrl = url.parse(request.url, true)
    var dateParam = new Date(parsedUrl.query.iso)
    
    switch(parsedUrl.path.split('?')[0]) {
        case "/api/parsetime":
            res = {hour: dateParam.getHours(), minute: dateParam.getMinutes(), second: dateParam.getSeconds()}
            break
        case "/api/unixtime": 
            res = { unixtime: dateParam.getTime()}
            break
    }
    
    response.writeHead(200, {'Content-Type': 'application/json' })
    response.end(JSON.stringify(res))
})

server.listen(port)


// var http = require('http')
// var url = require('url')

// function parsetime (time) {
//     return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//     }
// }

// function unixtime (time) {
//     return { unixtime: time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//     var parsedUrl = url.parse(req.url, true)
//     var time = new Date(parsedUrl.query.iso)
//     var result

//     if (/^\/api\/parsetime/.test(req.url)) {
//         result = parsetime(time)
//     } else if (/^\/api\/unixtime/.test(req.url)) {
//         result = unixtime(time)
//     }

//     if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//     } else {
//         res.writeHead(404)
//         res.end()
//     }
// })
// server.listen(Number(process.argv[2]))