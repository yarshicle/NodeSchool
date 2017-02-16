var http = require('http')

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
}).on('error', console.error)

// var url = process.argv[2]

// function GetResponse (response) {
//     response.on("data", function (data) {
//         console.log(data.toString())
//     })
//     response.on("error", function(err) {
//         console.error("An error occurred:", err)
//     })
// }

// http.get(url, GetResponse)