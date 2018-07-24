function sendResponse(errorCode, res, msg) {
    res.send([{'status': errorCode}, {'error': msg}]);
}

module.exports = {sendResponse};