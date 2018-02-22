module.exports = (server) => {
    return server
        .on('error', log.bind(null, 'SERVER ERROR EVENT'))
        .on('listening', log.bind(null, 'SERVER LISTENING EVENT'))
        .on('checkContinue', log.bind(null, 'SERVER CHECK_CONTINUE EVENT'))
        .on('checkExpectation', log.bind(null, 'SERVER CHECK_EXPECTATION EVENT'))
        .on('clientError', log.bind(null, 'SERVER CLIENT_ERROR EVENT'))
        .on('close', log.bind(null, 'SERVER CLOSE EVENT'))
        .on('connect', log.bind(null, 'SERVER CONNECT EVENT'))
        .on('connection', log.bind(null, 'SERVER CONNECTION EVENT'))
        .on('upgrade', log.bind(null, 'SERVER UPGRADE EVENT'))
        .on('request', (req, res) => {
            log('SERVER REQUEST EVENT');

            req
                .on('aborted', log.bind(null, 'SERVER REQUEST REQUEST ABORTED EVENT'))
                .on('close', log.bind(null, 'SERVER REQUEST REQUEST CLOSE EVENT'));

            res
                .on('close', log.bind(null, 'SERVER REQUEST RESPONSE CLOSE EVENT'))
                .on('finish', log.bind(null, 'SERVER REQUEST RESPONSE FINISH EVENT'));
        });
};

function log (message) {
    console.log(message);
}
