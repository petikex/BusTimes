const json = `{ StatusCodeError: 400 - "{\"$type\":\"Tfl.Api.Presentation.Entities.ApiError, Tfl.Api.Presentation.Entities\",\"timestampUtc\":\"2018-07-23T16:56:26.9334888Z\",\"exceptionType\":\"ApiArgumentException\",\"httpStatusCode\":400,\"httpStatus\":\"BadRequest\",\"relativeUri\":\"/Stoppoint?lat=[object%20Object]&lon=%7B%22status%22:200,%22result%22:%7B%22postcode%22:%22NW5%201TL%22,%22quality%22:1,%22eastings%22:528721,%22northings%22:185525,%22country%22:%22England%22,%22nhs_ha%22:%22London%22,%22longitude%22:-0.144754,%22latitude%22:51.553935,%22european_electoral_region%22:%22London%22,%22primary_care_trust%22:%22Camden%22,%22region%22:%22London%22,%22lsoa%22:%22Camden%20003E%22,%22msoa%22:%22Camden%20003%22,%22incode%22:%221TL%22,%22outcode%22:%22NW5%22,%22parliamentary_constituency%22:%22Holborn%20and%20St%20Pancras%22,%22admin_district%22:%22Camden%22,%22parish%22:%22Camden,%20unparished%20area%22,%22admin_county%22:null,%22admin_ward%22:%22Kentish%20Town%22,%22ccg%22:%22NHS%20Camden%22,%22nuts%22:%22Camden%20and%20City%20of%20London%22,%22codes%22:%7B%22admin_district%22:%22E09000007%22,%22admin_county%22:%22E99999999%22,%22admin_ward%22:%22E05000139%22,%22parish%22:%22E43000197%22,%22parliamentary_constituency%22:%22E14000750%22,%22ccg%22:%22E38000027%22,%22nuts%22:%22UKI31%22%7D%7D%7D&stoptypes=NaptanPublicBusCoachTram\",\"message\":\"The value '[object Object]' is not valid for Lat. Latitude must be specified The value '{\\\"status\\\":200,\\\"result\\\":{\\\"postcode\\\":\\\"NW5 1TL\\\",\\\"quality\\\":1,\\\"eastings\\\":528721,\\\"northings\\\":185525,\\\"country\\\":\\\"England\\\",\\\"nhs_ha\\\":\\\"London\\\",\\\"longitude\\\":-0.144754,\\\"latitude\\\":51.553935,\\\"european_electoral_region\\\":\\\"London\\\",\\\"primary_care_trust\\\":\\\"Camden\\\",\\\"region\\\":\\\"London\\\",\\\"lsoa\\\":\\\"Camden 003E\\\",\\\"msoa\\\":\\\"Camden 003\\\",\\\"incode\\\":\\\"1TL\\\",\\\"outcode\\\":\\\"NW5\\\",\\\"parliamentary_constituency\\\":\\\"Holborn and St Pancras\\\",\\\"admin_district\\\":\\\"Camden\\\",\\\"parish\\\":\\\"Camden, unparished area\\\",\\\"admin_county\\\":null,\\\"admin_ward\\\":\\\"Kentish Town\\\",\\\"ccg\\\":\\\"NHS Camden\\\",\\\"nuts\\\":\\\"Camden and City of London\\\",\\\"codes\\\":{\\\"admin_district\\\":\\\"E09000007\\\",\\\"admin_county\\\":\\\"E99999999\\\",\\\"admin_ward\\\":\\\"E05000139\\\",\\\"parish\\\":\\\"E43000197\\\",\\\"parliamentary_constituency\\\":\\\"E14000750\\\",\\\"ccg\\\":\\\"E38000027\\\",\\\"nuts\\\":\\\"UKI31\\\"}}}' is not valid for Lon. Longitude must be specified \"}"
at new StatusCodeError (C:\Users\PEK\Training\BusTimes\node_modules\request-promise-core\lib\errors.js:32:15)
at Request.plumbing.callback (C:\Users\PEK\Training\BusTimes\node_modules\request-promise-core\lib\plumbing.js:104:33)
at Request.RP$callback [as _callback] (C:\Users\PEK\Training\BusTimes\node_modules\request-promise-core\lib\plumbing.js:46:31)
at Request.self.callback (C:\Users\PEK\Training\BusTimes\node_modules\request\request.js:185:22)
at Request.emit (events.js:182:13)
at Request.<anonymous> (C:\Users\PEK\Training\BusTimes\node_modules\request\request.js:1157:10)
at Request.emit (events.js:182:13)
at IncomingMessage.<anonymous> (C:\Users\PEK\Training\BusTimes\node_modules\request\request.js:1079:12)
at Object.onceWrapper (events.js:273:13)
at IncomingMessage.emit (events.js:187:15)
at endReadableNT (_stream_readable.js:1081:12)
at process._tickCallback (internal/process/next_tick.js:63:19)
name: 'StatusCodeError',
statusCode: 400,
message:
'400 - "{\\"$type\\":\\"Tfl.Api.Presentation.Entities.ApiError, Tfl.Api.Presentation.Entities\\",\\"timestampUtc\\":\\"2018-07-23T16:56:26.9334888Z\\",\\"exceptionType\\":\\"ApiArgumentException\\",\\"httpStatusCode\\":400,\\"httpStatus\\":\\"BadRequest\\",\\"relativeUri\\":\\"/Stoppoint?lat=[object%20Object]&lon=%7B%22status%22:200,%22result%22:%7B%22postcode%22:%22NW5%201TL%22,%22quality%22:1,%22eastings%22:528721,%22northings%22:185525,%22country%22:%22England%22,%22nhs_ha%22:%22London%22,%22longitude%22:-0.144754,%22latitude%22:51.553935,%22european_electoral_region%22:%22London%22,%22primary_care_trust%22:%22Camden%22,%22region%22:%22London%22,%22lsoa%22:%22Camden%20003E%22,%22msoa%22:%22Camden%20003%22,%22incode%22:%221TL%22,%22outcode%22:%22NW5%22,%22parliamentary_constituency%22:%22Holborn%20and%20St%20Pancras%22,%22admin_district%22:%22Camden%22,%22parish%22:%22Camden,%20unparished%20area%22,%22admin_county%22:null,%22admin_ward%22:%22Kentish%20Town%22,%22ccg%22:%22NHS%20Camden%22,%22nuts%22:%22Camden%20and%20City%20of%20London%22,%22codes%22:%7B%22admin_district%22:%22E09000007%22,%22admin_county%22:%22E99999999%22,%22admin_ward%22:%22E05000139%22,%22parish%22:%22E43000197%22,%22parliamentary_constituency%22:%22E14000750%22,%22ccg%22:%22E38000027%22,%22nuts%22:%22UKI31%22%7D%7D%7D&stoptypes=NaptanPublicBusCoachTram\\",\\"message\\":\\"The value \'[object Object]\' is not valid for Lat. Latitude must be specified The value \'{\\\\\\"status\\\\\\":200,\\\\\\"result\\\\\\":{\\\\\\"postcode\\\\\\":\\\\\\"NW5 1TL\\\\\\",\\\\\\"quality\\\\\\":1,\\\\\\"eastings\\\\\\":528721,\\\\\\"northings\\\\\\":185525,\\\\\\"country\\\\\\":\\\\\\"England\\\\\\",\\\\\\"nhs_ha\\\\\\":\\\\\\"London\\\\\\",\\\\\\"longitude\\\\\\":-0.144754,\\\\\\"latitude\\\\\\":51.553935,\\\\\\"european_electoral_region\\\\\\":\\\\\\"London\\\\\\",\\\\\\"primary_care_trust\\\\\\":\\\\\\"Camden\\\\\\",\\\\\\"region\\\\\\":\\\\\\"London\\\\\\",\\\\\\"lsoa\\\\\\":\\\\\\"Camden 003E\\\\\\",\\\\\\"msoa\\\\\\":\\\\\\"Camden 003\\\\\\",\\\\\\"incode\\\\\\":\\\\\\"1TL\\\\\\",\\\\\\"outcode\\\\\\":\\\\\\"NW5\\\\\\",\\\\\\"parliamentary_constituency\\\\\\":\\\\\\"Holborn and St Pancras\\\\\\",\\\\\\"admin_district\\\\\\":\\\\\\"Camden\\\\\\",\\\\\\"parish\\\\\\":\\\\\\"Camden, unparished area\\\\\\",\\\\\\"admin_county\\\\\\":null,\\\\\\"admin_ward\\\\\\":\\\\\\"Kentish Town\\\\\\",\\\\\\"ccg\\\\\\":\\\\\\"NHS Camden\\\\\\",\\\\\\"nuts\\\\\\":\\\\\\"Camden and City of London\\\\\\",\\\\\\"codes\\\\\\":{\\\\\\"admin_district\\\\\\":\\\\\\"E09000007\\\\\\",\\\\\\"admin_county\\\\\\":\\\\\\"E99999999\\\\\\",\\\\\\"admin_ward\\\\\\":\\\\\\"E05000139\\\\\\",\\\\\\"parish\\\\\\":\\\\\\"E43000197\\\\\\",\\\\\\"parliamentary_constituency\\\\\\":\\\\\\"E14000750\\\\\\",\\\\\\"ccg\\\\\\":\\\\\\"E38000027\\\\\\",\\\\\\"nuts\\\\\\":\\\\\\"UKI31\\\\\\"}}}\' is not valid for Lon. Longitude must be specified \\"}"',
error:
'{"$type":"Tfl.Api.Presentation.Entities.ApiError, Tfl.Api.Presentation.Entities","timestampUtc":"2018-07-23T16:56:26.9334888Z","exceptionType":"ApiArgumentException","httpStatusCode":400,"httpStatus":"BadRequest","relativeUri":"/Stoppoint?lat=[object%20Object]&lon=%7B%22status%22:200,%22result%22:%7B%22postcode%22:%22NW5%201TL%22,%22quality%22:1,%22eastings%22:528721,%22northings%22:185525,%22country%22:%22England%22,%22nhs_ha%22:%22London%22,%22longitude%22:-0.144754,%22latitude%22:51.553935,%22european_electoral_region%22:%22London%22,%22primary_care_trust%22:%22Camden%22,%22region%22:%22London%22,%22lsoa%22:%22Camden%20003E%22,%22msoa%22:%22Camden%20003%22,%22incode%22:%221TL%22,%22outcode%22:%22NW5%22,%22parliamentary_constituency%22:%22Holborn%20and%20St%20Pancras%22,%22admin_district%22:%22Camden%22,%22parish%22:%22Camden,%20unparished%20area%22,%22admin_county%22:null,%22admin_ward%22:%22Kentish%20Town%22,%22ccg%22:%22NHS%20Camden%22,%22nuts%22:%22Camden%20and%20City%20of%20London%22,%22codes%22:%7B%22admin_district%22:%22E09000007%22,%22admin_county%22:%22E99999999%22,%22admin_ward%22:%22E05000139%22,%22parish%22:%22E43000197%22,%22parliamentary_constituency%22:%22E14000750%22,%22ccg%22:%22E38000027%22,%22nuts%22:%22UKI31%22%7D%7D%7D&stoptypes=NaptanPublicBusCoachTram","message":"The value \'[object Object]\' is not valid for Lat. Latitude must be specified The value \'{\\"status\\":200,\\"result\\":{\\"postcode\\":\\"NW5 1TL\\",\\"quality\\":1,\\"eastings\\":528721,\\"northings\\":185525,\\"country\\":\\"England\\",\\"nhs_ha\\":\\"London\\",\\"longitude\\":-0.144754,\\"latitude\\":51.553935,\\"european_electoral_region\\":\\"London\\",\\"primary_care_trust\\":\\"Camden\\",\\"region\\":\\"London\\",\\"lsoa\\":\\"Camden 003E\\",\\"msoa\\":\\"Camden 003\\",\\"incode\\":\\"1TL\\",\\"outcode\\":\\"NW5\\",\\"parliamentary_constituency\\":\\"Holborn and St Pancras\\",\\"admin_district\\":\\"Camden\\",\\"parish\\":\\"Camden, unparished area\\",\\"admin_county\\":null,\\"admin_ward\\":\\"Kentish Town\\",\\"ccg\\":\\"NHS Camden\\",\\"nuts\\":\\"Camden and City of London\\",\\"codes\\":{\\"admin_district\\":\\"E09000007\\",\\"admin_county\\":\\"E99999999\\",\\"admin_ward\\":\\"E05000139\\",\\"parish\\":\\"E43000197\\",\\"parliamentary_constituency\\":\\"E14000750\\",\\"ccg\\":\\"E38000027\\",\\"nuts\\":\\"UKI31\\"}}}\' is not valid for Lon. Longitude must be specified "}',
options:
{ uri:
  'https://api.tfl.gov.uk/Stoppoint?lat=[object Object]&lon={"status":200,"result":{"postcode":"NW5 1TL","quality":1,"eastings":528721,"northings":185525,"country":"England","nhs_ha":"London","longitude":-0.144754,"latitude":51.553935,"european_electoral_region":"London","primary_care_trust":"Camden","region":"London","lsoa":"Camden 003E","msoa":"Camden 003","incode":"1TL","outcode":"NW5","parliamentary_constituency":"Holborn and St Pancras","admin_district":"Camden","parish":"Camden, unparished area","admin_county":null,"admin_ward":"Kentish Town","ccg":"NHS Camden","nuts":"Camden and City of London","codes":{"admin_district":"E09000007","admin_county":"E99999999","admin_ward":"E05000139","parish":"E43000197","parliamentary_constituency":"E14000750","ccg":"E38000027","nuts":"UKI31"}}}&stoptypes=NaptanPublicBusCoachTram&app_id=7d555bb6&app_key=40b776fcf10d513512447b74ca506f48',
 callback: [Function: RP$callback],
 transform: undefined,
 simple: true,
 resolveWithFullResponse: false,
 transform2xxOnly: false },
response:
IncomingMessage {
 _readableState:
  ReadableState {
    objectMode: false,
    highWaterMark: 16384,
    buffer: BufferList { length: 0 },
    length: 0,
    pipes: null,
    pipesCount: 0,
    flowing: true,
    ended: true,
    endEmitted: true,
    reading: false,
    sync: false,
    needReadable: false,
    emittedReadable: false,
    readableListening: false,
    resumeScheduled: false,
    emitClose: true,
    destroyed: false,
    defaultEncoding: 'utf8',
    awaitDrain: 0,
    readingMore: false,
    decoder: null,
    encoding: null },
 readable: false,
 _events:
  { end: [Array],
    close: [Array],
    data: [Function],
    error: [Function] },
 _eventsCount: 4,
 _maxListeners: undefined,
 socket:
  TLSSocket {
    _tlsOptions: [Object],
    _secureEstablished: true,
    _securePending: false,
    _newSessionPending: false,
    _controlReleased: true,
    _SNICallback: null,
    servername: 'api.tfl.gov.uk',
    alpnProtocol: false,
    authorized: true,
    authorizationError: null,
    encrypted: true,
    _events: [Object],
    _eventsCount: 8,
    connecting: false,
    _hadError: false,
    _handle: [TLSWrap],
    _parent: null,
    _host: 'api.tfl.gov.uk',
    _readableState: [ReadableState],
    readable: true,
    _maxListeners: undefined,
    _writableState: [WritableState],
    writable: false,
    allowHalfOpen: false,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: undefined,
    _server: null,
    ssl: [TLSWrap],
    _requestCert: true,
    _rejectUnauthorized: true,
    parser: null,
    _httpMessage: [ClientRequest],
    [Symbol(res)]: [TLSWrap],
    [Symbol(asyncId)]: 78,
    [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: null,
    [Symbol(kBytesRead)]: 0,
    [Symbol(kBytesWritten)]: 0,
    [Symbol(connect-options)]: [Object] },
 connection:
  TLSSocket {
    _tlsOptions: [Object],
    _secureEstablished: true,
    _securePending: false,
    _newSessionPending: false,
    _controlReleased: true,
    _SNICallback: null,
    servername: 'api.tfl.gov.uk',
    alpnProtocol: false,
    authorized: true,
    authorizationError: null,
    encrypted: true,
    _events: [Object],
    _eventsCount: 8,
    connecting: false,
    _hadError: false,
    _handle: [TLSWrap],
    _parent: null,
    _host: 'api.tfl.gov.uk',
    _readableState: [ReadableState],
    readable: true,
    _maxListeners: undefined,
    _writableState: [WritableState],
    writable: false,
    allowHalfOpen: false,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: undefined,
    _server: null,
    ssl: [TLSWrap],
    _requestCert: true,
    _rejectUnauthorized: true,
    parser: null,
    _httpMessage: [ClientRequest],
    [Symbol(res)]: [TLSWrap],
    [Symbol(asyncId)]: 78,
    [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: null,
    [Symbol(kBytesRead)]: 0,
    [Symbol(kBytesWritten)]: 0,
    [Symbol(connect-options)]: [Object] },
 httpVersionMajor: 1,
 httpVersionMinor: 1,
 httpVersion: '1.1',
 complete: true,
 headers:
  { date: 'Mon, 23 Jul 2018 16:56:26 GMT',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'close',
    'set-cookie': [Array],
    'access-control-allow-headers': 'Content-Type',
    'access-control-allow-methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'access-control-allow-origin': '*',
    age: '0',
    'cache-control': 'no-cache, s-maxage=10.000',
    expires: '-1',
    pragma: 'no-cache',
    via: '1.1 varnish',
    'x-aspnet-version': '4.0.30319',
    'x-backend': 'api',
    'x-banning': '',
    'x-cache': 'MISS',
    'x-cacheable': 'Yes. Cacheable',
    'x-no-smaxage': 'true',
    'x-ttl': '10.000',
    'x-ttl-rule': '1',
    'x-varnish': '2049217967',
    'expect-ct':
     'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    server: 'cloudflare',
    'cf-ray': '43efae303db2bbe4-LHR' },
 rawHeaders:
  [ 'Date',
    'Mon, 23 Jul 2018 16:56:26 GMT',
    'Content-Type',
    'application/json; charset=utf-8',
    'Transfer-Encoding',
    'chunked',
    'Connection',
    'close',
    'Set-Cookie',
    '__cfduid=d89220d636c7a0585c423d38127ee36541532364986; expires=Tue, 23-Jul-19 16:56:26 GMT; path=/; domain=.tfl.gov.uk; HttpOnly',
    'Access-Control-Allow-Headers',
    'Content-Type',
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Origin',
    '*',
    'Age',
    '0',
    'Cache-Control',
    'no-cache, s-maxage=10.000',
    'Expires',
    '-1',
    'Pragma',
    'no-cache',
    'Via',
    '1.1 varnish',
    'X-AspNet-Version',
    '4.0.30319',
    'X-Backend',
    'api',
    'X-Banning',
    '',
    'X-Cache',
    'MISS',
    'X-Cacheable',
    'Yes. Cacheable',
    'X-No-Smaxage',
    'true',
    'X-TTL',
    '10.000',
    'X-TTL-RULE',
    '1',
    'X-Varnish',
    '2049217967',
    'Expect-CT',
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    'Server',
    'cloudflare',
    'CF-RAY',
    '43efae303db2bbe4-LHR' ],
 trailers: {},
 rawTrailers: [],
 aborted: false,
 upgrade: false,
 url: '',
 method: null,
 statusCode: 400,
 statusMessage: 'Bad Request',
 client:
  TLSSocket {
    _tlsOptions: [Object],
    _secureEstablished: true,
    _securePending: false,
    _newSessionPending: false,
    _controlReleased: true,
    _SNICallback: null,
    servername: 'api.tfl.gov.uk',
    alpnProtocol: false,
    authorized: true,
    authorizationError: null,
    encrypted: true,
    _events: [Object],
    _eventsCount: 8,
    connecting: false,
    _hadError: false,
    _handle: [TLSWrap],
    _parent: null,
    _host: 'api.tfl.gov.uk',
    _readableState: [ReadableState],
    readable: true,
    _maxListeners: undefined,
    _writableState: [WritableState],
    writable: false,
    allowHalfOpen: false,
    _sockname: null,
    _pendingData: null,
    _pendingEncoding: '',
    server: undefined,
    _server: null,
    ssl: [TLSWrap],
    _requestCert: true,
    _rejectUnauthorized: true,
    parser: null,
    _httpMessage: [ClientRequest],
    [Symbol(res)]: [TLSWrap],
    [Symbol(asyncId)]: 78,
    [Symbol(lastWriteQueueSize)]: 0,
    [Symbol(timeout)]: null,
    [Symbol(kBytesRead)]: 0,
    [Symbol(kBytesWritten)]: 0,
    [Symbol(connect-options)]: [Object] },
 _consuming: true,
 _dumped: false,
 req:
  ClientRequest {
    _events: [Object],
    _eventsCount: 5,
    _maxListeners: undefined,
    output: [],
    outputEncodings: [],
    outputCallbacks: [],
    outputSize: 0,
    writable: true,
    _last: true,
    chunkedEncoding: false,
    shouldKeepAlive: false,
    useChunkedEncodingByDefault: false,
    sendDate: false,
    _removedConnection: false,
    _removedContLen: false,
    _removedTE: false,
    _contentLength: 0,
    _hasBody: true,
    _trailer: '',
    finished: true,
    _headerSent: true,
    socket: [TLSSocket],
    connection: [TLSSocket],
    _header:
     'GET /Stoppoint?lat=[object%20Object]&lon=%7B%22status%22:200,%22result%22:%7B%22postcode%22:%22NW5%201TL%22,%22quality%22:1,%22eastings%22:528721,%22northings%22:185525,%22country%22:%22England%22,%22nhs_ha%22:%22London%22,%22longitude%22:-0.144754,%22latitude%22:51.553935,%22european_electoral_region%22:%22London%22,%22primary_care_trust%22:%22Camden%22,%22region%22:%22London%22,%22lsoa%22:%22Camden%20003E%22,%22msoa%22:%22Camden%20003%22,%22incode%22:%221TL%22,%22outcode%22:%22NW5%22,%22parliamentary_constituency%22:%22Holborn%20and%20St%20Pancras%22,%22admin_district%22:%22Camden%22,%22parish%22:%22Camden,%20unparished%20area%22,%22admin_county%22:null,%22admin_ward%22:%22Kentish%20Town%22,%22ccg%22:%22NHS%20Camden%22,%22nuts%22:%22Camden%20and%20City%20of%20London%22,%22codes%22:%7B%22admin_district%22:%22E09000007%22,%22admin_county%22:%22E99999999%22,%22admin_ward%22:%22E05000139%22,%22parish%22:%22E43000197%22,%22parliamentary_constituency%22:%22E14000750%22,%22ccg%22:%22E38000027%22,%22nuts%22:%22UKI31%22%7D%7D%7D&stoptypes=NaptanPublicBusCoachTram&app_id=7d555bb6&app_key=40b776fcf10d513512447b74ca506f48 HTTP/1.1\r\nhost: api.tfl.gov.uk\r\nConnection: close\r\n\r\n',
    _onPendingData: [Function: noopPendingOutput],
    agent: [Agent],
    socketPath: undefined,
    timeout: undefined,
    method: 'GET',
    path:
     '/Stoppoint?lat=[object%20Object]&lon=%7B%22status%22:200,%22result%22:%7B%22postcode%22:%22NW5%201TL%22,%22quality%22:1,%22eastings%22:528721,%22northings%22:185525,%22country%22:%22England%22,%22nhs_ha%22:%22London%22,%22longitude%22:-0.144754,%22latitude%22:51.553935,%22european_electoral_region%22:%22London%22,%22primary_care_trust%22:%22Camden%22,%22region%22:%22London%22,%22lsoa%22:%22Camden%20003E%22,%22msoa%22:%22Camden%20003%22,%22incode%22:%221TL%22,%22outcode%22:%22NW5%22,%22parliamentary_constituency%22:%22Holborn%20and%20St%20Pancras%22,%22admin_district%22:%22Camden%22,%22parish%22:%22Camden,%20unparished%20area%22,%22admin_county%22:null,%22admin_ward%22:%22Kentish%20Town%22,%22ccg%22:%22NHS%20Camden%22,%22nuts%22:%22Camden%20and%20City%20of%20London%22,%22codes%22:%7B%22admin_district%22:%22E09000007%22,%22admin_county%22:%22E99999999%22,%22admin_ward%22:%22E05000139%22,%22parish%22:%22E43000197%22,%22parliamentary_constituency%22:%22E14000750%22,%22ccg%22:%22E38000027%22,%22nuts%22:%22UKI31%22%7D%7D%7D&stoptypes=NaptanPublicBusCoachTram&app_id=7d555bb6&app_key=40b776fcf10d513512447b74ca506f48',
    _ended: true,
    res: [Circular],
    aborted: undefined,
    timeoutCb: null,
    upgradeOrConnect: false,
    parser: null,
    maxHeadersCount: null,
    [Symbol(isCorked)]: false,
    [Symbol(outHeadersKey)]: [Object] },
 request:
  Request {
    _events: [Object],
    _eventsCount: 5,
    _maxListeners: undefined,
    uri: [Url],
    readable: true,
    writable: true,
    _qs: [Querystring],
    _auth: [Auth],
    _oauth: [OAuth],
    _multipart: [Multipart],
    _redirect: [Redirect],
    _tunnel: [Tunnel],
    _rp_resolve: [Function],
    _rp_reject: [Function],
    _rp_promise: [Promise],
    _rp_callbackOrig: undefined,
    callback: [Function],
    _rp_options: [Object],
    headers: {},
    setHeader: [Function],
    hasHeader: [Function],
    getHeader: [Function],
    removeHeader: [Function],
    method: 'GET',
    localAddress: undefined,
    pool: {},
    dests: [],
    __isRequestRequest: true,
    _callback: [Function: RP$callback],
    proxy: null,
    tunnel: true,
    setHost: true,
    originalCookieHeader: undefined,
    _disableCookies: true,
    _jar: undefined,
    port: 443,
    host: 'api.tfl.gov.uk',
    path:
     '/Stoppoint?lat=[object%20Object]&lon=%7B%22status%22:200,%22result%22:%7B%22postcode%22:%22NW5%201TL%22,%22quality%22:1,%22eastings%22:528721,%22northings%22:185525,%22country%22:%22England%22,%22nhs_ha%22:%22London%22,%22longitude%22:-0.144754,%22latitude%22:51.553935,%22european_electoral_region%22:%22London%22,%22primary_care_trust%22:%22Camden%22,%22region%22:%22London%22,%22lsoa%22:%22Camden%20003E%22,%22msoa%22:%22Camden%20003%22,%22incode%22:%221TL%22,%22outcode%22:%22NW5%22,%22parliamentary_constituency%22:%22Holborn%20and%20St%20Pancras%22,%22admin_district%22:%22Camden%22,%22parish%22:%22Camden,%20unparished%20area%22,%22admin_county%22:null,%22admin_ward%22:%22Kentish%20Town%22,%22ccg%22:%22NHS%20Camden%22,%22nuts%22:%22Camden%20and%20City%20of%20London%22,%22codes%22:%7B%22admin_district%22:%22E09000007%22,%22admin_county%22:%22E99999999%22,%22admin_ward%22:%22E05000139%22,%22parish%22:%22E43000197%22,%22parliamentary_constituency%22:%22E14000750%22,%22ccg%22:%22E38000027%22,%22nuts%22:%22UKI31%22%7D%7D%7D&stoptypes=NaptanPublicBusCoachTram&app_id=7d555bb6&app_key=40b776fcf10d513512447b74ca506f48',
    httpModule: [Object],
    agentClass: [Function],
    agent: [Agent],
    _started: true,
    href:
     'https://api.tfl.gov.uk/Stoppoint?lat=[object%20Object]&lon=%7B%22status%22:200,%22result%22:%7B%22postcode%22:%22NW5%201TL%22,%22quality%22:1,%22eastings%22:528721,%22northings%22:185525,%22country%22:%22England%22,%22nhs_ha%22:%22London%22,%22longitude%22:-0.144754,%22latitude%22:51.553935,%22european_electoral_region%22:%22London%22,%22primary_care_trust%22:%22Camden%22,%22region%22:%22London%22,%22lsoa%22:%22Camden%20003E%22,%22msoa%22:%22Camden%20003%22,%22incode%22:%221TL%22,%22outcode%22:%22NW5%22,%22parliamentary_constituency%22:%22Holborn%20and%20St%20Pancras%22,%22admin_district%22:%22Camden%22,%22parish%22:%22Camden,%20unparished%20area%22,%22admin_county%22:null,%22admin_ward%22:%22Kentish%20Town%22,%22ccg%22:%22NHS%20Camden%22,%22nuts%22:%22Camden%20and%20City%20of%20London%22,%22codes%22:%7B%22admin_district%22:%22E09000007%22,%22admin_county%22:%22E99999999%22,%22admin_ward%22:%22E05000139%22,%22parish%22:%22E43000197%22,%22parliamentary_constituency%22:%22E14000750%22,%22ccg%22:%22E38000027%22,%22nuts%22:%22UKI31%22%7D%7D%7D&stoptypes=NaptanPublicBusCoachTram&app_id=7d555bb6&app_key=40b776fcf10d513512447b74ca506f48',
    req: [ClientRequest],
    ntick: true,
    response: [Circular],
    originalHost: 'api.tfl.gov.uk',
    originalHostHeaderName: 'host',
    responseContent: [Circular],
    _destdata: true,
    _ended: true,
    _callbackCalled: true },
 toJSON: [Function: responseToJSON],
 caseless: Caseless { dict: [Object] },
 body:
  '{"$type":"Tfl.Api.Presentation.Entities.ApiError, Tfl.Api.Presentation.Entities","timestampUtc":"2018-07-23T16:56:26.9334888Z","exceptionType":"ApiArgumentException","httpStatusCode":400,"httpStatus":"BadRequest","relativeUri":"/Stoppoint?lat=[object%20Object]&lon=%7B%22status%22:200,%22result%22:%7B%22postcode%22:%22NW5%201TL%22,%22quality%22:1,%22eastings%22:528721,%22northings%22:185525,%22country%22:%22England%22,%22nhs_ha%22:%22London%22,%22longitude%22:-0.144754,%22latitude%22:51.553935,%22european_electoral_region%22:%22London%22,%22primary_care_trust%22:%22Camden%22,%22region%22:%22London%22,%22lsoa%22:%22Camden%20003E%22,%22msoa%22:%22Camden%20003%22,%22incode%22:%221TL%22,%22outcode%22:%22NW5%22,%22parliamentary_constituency%22:%22Holborn%20and%20St%20Pancras%22,%22admin_district%22:%22Camden%22,%22parish%22:%22Camden,%20unparished%20area%22,%22admin_county%22:null,%22admin_ward%22:%22Kentish%20Town%22,%22ccg%22:%22NHS%20Camden%22,%22nuts%22:%22Camden%20and%20City%20of%20London%22,%22codes%22:%7B%22admin_district%22:%22E09000007%22,%22admin_county%22:%22E99999999%22,%22admin_ward%22:%22E05000139%22,%22parish%22:%22E43000197%22,%22parliamentary_constituency%22:%22E14000750%22,%22ccg%22:%22E38000027%22,%22nuts%22:%22UKI31%22%7D%7D%7D&stoptypes=NaptanPublicBusCoachTram","message":"The value \'[object Object]\' is not valid for Lat. Latitude must be specified The value \'{\\"status\\":200,\\"result\\":{\\"postcode\\":\\"NW5 1TL\\",\\"quality\\":1,\\"eastings\\":528721,\\"northings\\":185525,\\"country\\":\\"England\\",\\"nhs_ha\\":\\"London\\",\\"longitude\\":-0.144754,\\"latitude\\":51.553935,\\"european_electoral_region\\":\\"London\\",\\"primary_care_trust\\":\\"Camden\\",\\"region\\":\\"London\\",\\"lsoa\\":\\"Camden 003E\\",\\"msoa\\":\\"Camden 003\\",\\"incode\\":\\"1TL\\",\\"outcode\\":\\"NW5\\",\\"parliamentary_constituency\\":\\"Holborn and St Pancras\\",\\"admin_district\\":\\"Camden\\",\\"parish\\":\\"Camden, unparished area\\",\\"admin_county\\":null,\\"admin_ward\\":\\"Kentish Town\\",\\"ccg\\":\\"NHS Camden\\",\\"nuts\\":\\"Camden and City of London\\",\\"codes\\":{\\"admin_district\\":\\"E09000007\\",\\"admin_county\\":\\"E99999999\\",\\"admin_ward\\":\\"E05000139\\",\\"parish\\":\\"E43000197\\",\\"parliamentary_constituency\\":\\"E14000750\\",\\"ccg\\":\\"E38000027\\",\\"nuts\\":\\"UKI31\\"}}}\' is not valid for Lon. Longitude must be specified "}' } }`
  console.log(JSON.parse(json));
