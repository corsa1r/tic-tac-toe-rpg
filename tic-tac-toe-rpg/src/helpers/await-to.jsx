export function to(promise) {
    return promise
        .then(data => [null, data])
        .catch(err => [err, null])
}
