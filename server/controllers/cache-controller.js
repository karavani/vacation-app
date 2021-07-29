const cache = new Map;

function put(key, value) {
    cache.set(key, value);
}
function extractUserDataFromCache(request){
    const authorizationString = request.headers["authorization"];
    const token = authorizationString.substring("Bearer ".length);
    const userData = cache.get(token);
    return userData;
}


function get(key) {
   return cache.get(key);
}

function remove(key) {
    cache.delete(key);
}

module.exports = {
    put,
    get,
    remove,
    extractUserDataFromCache
}