var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

function getFileList(callback) {
    fs.readdir(folder, callback)
}

function displayFileList(err,list) {
    if (err) return console.error(err)
    // for (var i=0; i < list.length; i++) {
    //     if (path.extname(list[i]) === fileExtension)
    //     console.log(list[i])
    // }
    list.forEach(function (file) {
        if (path.extname(file) === ext) console.log(file)
    })
}

getFileList(displayFileList)