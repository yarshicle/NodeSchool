//1
//console.log('beep boop')

//2
// var fs = require('fs')
// var file = process.argv[2]
// fs.createReadStream(file).pipe(process.stdout)

//3
//process.stdin.pipe(process.stdout)

//4
// var through = require('through2')
// var stream = through(write)

// function write (buffer, encoding, next) {
//     this.push(buffer.toString().toUpperCase())
//     next()
// }
//THIS DOES WHAT THE ABOVE DOES AS WELL, BUT USES through2-map instead (like learnyounode #12)
// var through = require('through2-map')
// var stream = through(function (chunk) {
//     return chunk.toString().toUpperCase()
// })
// process.stdin.pipe(stream).pipe(process.stdout)

//5
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

//6
// var concat = require('concat-stream')

// process.stdin.pipe(concat(function(buffer) {
//     // process.stdout.write(buffer.toString().split('').reverse().join(''))
//     // process.stdout.write('\n')
//     console.log(buffer.toString().split('').reverse().join(''))
// }))