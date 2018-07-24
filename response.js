"use strict"
// Sends the response for a request (through express)
function sendResponse(errorCode, res, msg) {
    res.send([{'status': errorCode}, {'error': msg}]);
}

module.exports = {sendResponse};