'use strict';

function getNrandomNumbers(n, max) {
    if (n > max) {
        throw Error();
    }
    const randNums = [];
    for (let i = 0; i < n; ++i) {
        let num;
        do {
            num =  Math.floor(Math.random() * max);
        } while (randNums.includes(num));
        randNums.push(num);
    }
    return randNums;
}

function normalizeStr(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
