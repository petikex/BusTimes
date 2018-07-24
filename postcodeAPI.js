const log = require('./Log')
const apiRequest = require('./apiRequest');

// Returns a promise with the response as its value
function getPostCode(postcode) {
    const url = `http://api.postcodes.io/postcodes/${postcode}`;
    log.logger.info(`Gathering data about postcode ${postcode} from postcodes.io`);
    const urlPromise = apiRequest.loadURL(url);
    return urlPromise;
}

module.exports = {getPostCode}