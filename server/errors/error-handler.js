let errorHandler = (e, request, response, next) => {
    // e = my Server error --> IT HAS AN ENUM INSIDE (!!) called errorType
    if (e.name === 'UnauthorizedError') {
        // jwt authentication error
        return response.status(401).json({ error: 'Invalid Token' });
    }

    if (e.errorType != undefined) {
        if (e.errorType.isShowStackTrace) {
            console.error(e);
        }
        response.status(e.errorType.httpCode).json({ error: e.errorType.message });
        return;

    }
    response.status(700).json({ error: "General error" });
}

module.exports = errorHandler;