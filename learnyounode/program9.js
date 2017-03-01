/*  My solution doesn't actually work because it doesn't print in order every time. 
    Need to collect the results into an indexed array before displaying to console */
// var bl = require('bl')
// var http = require('http')

// function GetContent (url, callback) {
//     http.get(url, function (response) {
//         response.pipe(bl(function (err, data){
//             if (err) {
//                 return callback(err)
//             }
//             callback(null, data.toString())
//         }))
//     })
// }
// var urlList = [process.argv[2], process.argv[3], process.argv[4]]

// urlList.forEach(function (url) {
//     GetContent(url, function(err, data){
//         if (err) {
//             return console.error('there was an error:', err)
//         }
//         console.log(data)
//     })
// })

/*Their Solution*/
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults() {
    for (var i =0; i < 3; i++) {
        console.log(results[i])
    }
}

function httpGet (index) {
    http.get(process.argv[2 + index], function(response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err)
            }
            //this line is the key to keeping the results in order before displaying - the strings may return at random times.
            results[index] = data.toString()
            count++

            if (count === 3) {
                printResults()
            }
        }))
    })
}

for (var i = 0; i < 3; i++) {
    httpGet(i)
}