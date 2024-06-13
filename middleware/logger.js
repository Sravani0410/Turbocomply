function logger(req, res, next) {
    const start = Date.now();
    res.on('finish', () => {
        const responseTime = Date.now() - start;
        console.log(`${req.method} ${req.url} - ${res.statusCode} - ${responseTime}ms - ${new Date().toISOString()}`);
    });
    next();
}

module.exports = logger;
