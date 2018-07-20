const rp = require('request-promise');

function loadURL(url) {
    return rp(url)
    .then(function (htmlString) {
        return htmlString;
    })
    .catch(function (err) {
        console.log(err);
    });
}



module.exports = {loadURL}