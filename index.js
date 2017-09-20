var app = require('../manager.js').getApp(__dirname)
var moment = require('moment')

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname})
})

app.get('/:dateStr', function(req, res) {
    res.send(getTimeStamp(req.params.dateStr))
})

function getTimeStamp(dateStr) {
    let timeStamp = {unix: null, natural: null}
    var date = new Date(isNaN(dateStr) ? dateStr : parseInt(dateStr))
    let natural = moment(date).format("MMMM DD, YYYY")
    if (moment(natural, 'MMMM DD, YYYY').isValid()) {
        timeStamp.unix = date.getTime()
        timeStamp.natural = natural 
    } 
    return timeStamp
}
