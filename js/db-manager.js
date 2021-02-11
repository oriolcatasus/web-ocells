'use strict';

const API_URL = 'http://localhost:3000/ocells'

let birds = null;

async function getAllBirds() {
    if (!birds) {
        birds = await get(API_URL);
    }
    return birds;
}

async function get(url) {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (err) {
        console.error(err);
    }
}

async function post(url) {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (err) {
        console.error(err);
    }
}