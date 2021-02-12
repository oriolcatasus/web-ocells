'use strict';

function getNrandomNumbers(n, max) {
    if (n > max) {
        throw Error();
    } else {
        const randNums = [];
        for (let i = 0; i < n; ++i) {
            let isDifferent = false;
            while (!isDifferent) {
                const num = Math.floor(Math.random() * max);
                if (!randNums.includes(num)) {
                    randNums.push(num);
                    isDifferent = true;
                }
            }
        }
        return randNums;
    }
}

function normalizeStr(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
