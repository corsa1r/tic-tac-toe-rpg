function sendRequest(path, data) {
    return fetch('http://localhost:3000/' + path, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    });
}

export default sendRequest;
