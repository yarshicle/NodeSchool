var filterFn = require('./program6module')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list){
    if (err) {
        return console.error('There was an error:', err)
    }
    list.forEach(function (file) {
        console.log(file)
    })
})


/*************************
**      MY SOLUTION     **
*************************/
// var myModule = require('./program6module')

// var folder = process.argv[2]
// var ext = process.argv[3]


// function errorFound(err, data) {
//     if (err) console.log('Some Error Occurred.')
//     data.forEach(function(file) {
//         console.log(file)
//     })
// }

// myModule(folder, ext, errorFound)