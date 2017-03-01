var net = require('net')
var port = process.argv[2]

Number.prototype.padLeft = function(base,chr){
    var  len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this;
}

var currDate = new Date()
var dateFormatted = currDate.getFullYear() +'-'+ (currDate.getMonth() + 1).padLeft() +'-'+ currDate.getDate().padLeft() +' '+ currDate.getHours().padLeft() +':'+ currDate.getMinutes().padLeft()

var server = net.createServer(function (socket) {
    //socket handling logic
    socket.end(dateFormatted + '\n')
}).listen(port)

// var net = require('net');


// function zeroFill(i) {
//     return (i < 10 ? '0' : '') + i;
// }


// function now () {
//     var d = new Date();
//     return d.getFullYear() + '-'
//         + zeroFill(d.getMonth() + 1) + '-'
//         + zeroFill(d.getDate()) + ' '
//         + zeroFill(d.getHours()) + ':'
//         + zeroFill(d.getMinutes());
// }


// var server = net.createServer(function(socket) {
//     socket.end(now() + '\n');
// });
// server.listen(Number(process.argv[2]));