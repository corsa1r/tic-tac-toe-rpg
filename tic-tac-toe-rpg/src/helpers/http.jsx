import { to } from './await-to.jsx'

const host = 'http://localhost:3000/' // add to env config

async function httpPost(path, data) {
    let [error, response] = await to(fetch(host + path, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    }))
    if (error) return Promise.reject(error)
    let [error2, json] = await to(response.json())
    if (error2) return Promise.reject(error2)
    return handleJsonResponse(json)
}

async function httpGet(path) {
    let [error, response] = await to(fetch(host + path, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }))
    if (error) return Promise.reject(error)
    let [error2, json] = await to(response.json())
    if (error2) return Promise.reject(error2)
    return handleJsonResponse(json)
}

function handleJsonResponse(response) {
    if (response.success === false) return Promise.reject(response.message)
    if (!response.data) return Promise.reject('No data returned from server')
    return Promise.resolve(response.data)
}

export { httpGet, httpPost }
