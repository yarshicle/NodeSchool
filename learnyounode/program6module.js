var fs = require('fs')
var path = require('path')

module.exports = function(dir, filterStr, callback) {
    fs.readdir(dir, function (err, list) {
        if (err) {
            return callback(err)
        }
        list = list.filter(function (file) {
            return path.extname(file) === '.' + filterStr
        })
        callback(null, list)
    })
}

/*************************
**      MY SOLUTION     **
*************************/
// module.exports = getFileList

// var fs = require('fs')
// var path = require('path')

// function getFileList(directory, filter, callback) {
//     fs.readdir(directory, function(err, data) {
//         if (err) return callback(err)
//         var filtered = data.filter(function (file) {
//             //if (path.extname(file) === filter) callback(null, file)
//             return path.extname(file) === '.' + filter
//         })
//         callback(null, filtered)    
//     })
// }