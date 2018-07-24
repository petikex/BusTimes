const rp = require('request-promise');
const log = require('./Log')

// Returns a promise with values from response
function loadURL(url) {
    log.logger.debug(`Hitting up ${url}`);
    return rp(url)
    .then(function (htmlString) {
        return htmlString;
    })
    .catch(function (err) {
        console.log(`An error occured while requesting ${url}`);
        log.logger.error(err);
    });
}



module.exports = {loadURL}