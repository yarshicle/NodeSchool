//BEEP BOOP
//console.log('beep boop')

//MEET PIPE
// var fs = require('fs')
// var file = process.argv[2]
// fs.createReadStream(file).pipe(process.stdout)

//INPUT OUTPUT
// process.stdin.pipe(process.stdout)

//TRANSFORM
// var through = require('through2')
// var stream = through(write)

// function write (buffer, encoding, next) {
//     this.push(buffer.toString().toUpperCase())
//     next()
// }
////THIS DOES WHAT THE ABOVE DOES AS WELL, BUT USES through2-map instead (like learnyounode #12)
// var through = require('through2-map')
// var stream = through(function (chunk) {
//     return chunk.toString().toUpperCase()
// })
// process.stdin.pipe(stream).pipe(process.stdout)

//LINES
// var split = require('split')
// var through = require('through2')
// var map = require('through2-map')
// var count = 0
// process.stdin
//     .pipe(split())
//     // .pipe(through(function (line, _, next) {
//     //     this.push((count % 2 === 0) ? line.toString().toLowerCase() + '\n' : line.toString().toUpperCase() + '\n')
//     //     count++
//     //     next()
//     // }))
//     //Same Same as above Pipe
//     .pipe(map(function (line){
//         var thisLine = (count % 2 === 0) ? line.toString().toLowerCase() : line.toString().toUpperCase()
//         count++;
//         return thisLine + '\n'
//     }))
//     .pipe(process.stdout)

//CONCAT
// var concat = require('concat-stream')

// process.stdin.pipe(concat(function(buffer) {
//     // process.stdout.write(buffer.toString().split('').reverse().join(''))
//     // process.stdout.write('\n')
//     console.log(buffer.toString().split('').reverse().join(''))
// }))

//HTTP SERVER
// var http = require('http')
// var fs = require('fs')
// var t2map = require('through2-map')

// var port = process.argv[2]

// var server = http.createServer(function (req, res) {
//     if (req.method === 'POST') {
//         //USE through2-map
//         req.pipe(t2map(function (chunk) {
//             return chunk.toString().toUpperCase()
//         })).pipe(res)
//         //USE through2
//         // req.pipe(through(function (buf, _, next) {
//         //     this.push(buf.toString().toUpperCase());
//         //     next();
//         // })).pipe(res);
//     } else {
//         res.end('send a POST!\n')
//     }
// })
// server.listen(port)

//HTTP CLIENT
// var request = require('request')
// var r = request.post('http://localhost:8099')
// process.stdin.pipe(r).pipe(process.stdout)

//WEBSOCKETS
// var ws = require('websocket-stream')
// var stream = ws('ws://localhost:8099')
// stream.write('hello\n')

//HTML STREAM
// var t2map = require('through2-map')
// var trumpet = require('trumpet')

// var tr = trumpet()

// var getLoud = function (chunk) {
//     return chunk.toString().toUpperCase();
// }

// var loud = tr.select('.loud').createStream()
// loud.pipe(t2map(getLoud)).pipe(loud)
// process.stdin.pipe(tr).pipe(process.stdout)

//DUPLEXER
// var spawn = require('child_process').spawn
// var duplexer2 = require('duplexer2')

// module.exports = function (cmd, args) {
//     var child = spawn(cmd, args)
//     return duplexer2(child.stdin, child.stdout)
// }

//DUPLEXER REDUX
var duplexer = require('duplexer2');
var through = require('through2').obj;

module.exports = function (counter) {
    var counts = {};
    var input = through(write, end);
    return duplexer({objectMode: true}, input, counter);

    function write (row, _, next) {
        counts[row.country] = (counts[row.country] || 0) + 1;
        next();
    }
    function end (done) {
        counter.setCounts(counts);
        done();
    }
};