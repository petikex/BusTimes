const request = require('request');
const rp = require('request-promise');
const applicationID = '7d555bb6';
const applicationKeys = '40b776fcf10d513512447b74ca506f48';

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