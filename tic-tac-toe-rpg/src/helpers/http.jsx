const host = 'http://localhost:3000/' // add to env config

function httpPost(path, data) {
    return fetch(host + path, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    });
}

function httpGet(path) {
    return fetch(host + path, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
}

export { httpGet, httpPost };
