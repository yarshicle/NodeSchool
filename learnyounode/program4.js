var fs = require('fs')

var count = 0;

function getNewLines(callback) {
    fs.readFile(process.argv[2], 'utf8', function fileDone(err, fileContents) {
        if (!err)
            count = fileContents.split('\n').length -1
            callback()
    })
}

function displayNewLineCount() {
    console.log(count)
}

getNewLines(displayNewLineCount)