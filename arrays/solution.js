// Learn array manipulations, run these exos with PRJS

export function getEmptyArray() {
    return [];
}

export function hugeFilledArray(size, value) {
    return new Array(size).fill(value);
}

export function pushAndRemove(array, pushTimes, pushValue, popFrontTimes) {
    array.push(...new Array(pushTimes).fill(pushValue));
    for (let i = 0; i < popFrontTimes; ++i) {
        array.shift();
    }
    return array;
}

export function getLastOfAlphabeticalOrder(array) {
    return array.sort()[array.length - 1];
}

export function removeInValueRange(array, first, last) {
    const firstIndex = array.indexOf(first);
    const secondIndex = array.indexOf(last);
    if (firstIndex == -1 || secondIndex == -1) return array;

    array.splice(firstIndex, secondIndex - firstIndex + 1);
    return array;
}

export function extractRange(array, start, end) {
    return array.slice(array.indexOf(start), array.lastIndexOf(end) + 1);
}

export function upperCaseAndReverse(array) {
    return array.reverse().map((e) => e.toUpperCase());
}

export function filterByInclude(array, filter) {
    return array.filter((e) => e.includes(filter));
}

export function filterHello(array) {
    const re = /hi{1,3}o?/;
    return array.filter((e) => re.test(e));
}

export function filterHello2(array) {
    const re = /^hi{1,3}o?$/;
    return array.filter((e) => re.test(e));
}

export function filterCodes(array) {
    const re = /^[a-e]{0,3}(\d|[0-4]\d)$/;
    return array.filter((e) => re.test(e));
}

export function countAnyWords(deepArray) {
    const words = deepArray.flat().reduce((acc, el) => acc.concat(el.split(/[-_\s]/)), []);

    const counters = {};
    for (const word of words) {
        if (word.trim() == '') continue;
        if (!counters[word]) {
            counters[word] = 0;
        }
        counters[word]++;
    }

    return counters;
}

export function productOfWords(array) {
    return array.reduce((acc, el, i) => acc * (el.length + i), 1);
}

export function getTheMax(array) {
    return Math.max(...array.flatMap((l) => l.split(' ').map((e) => parseInt(e))));
}

export function getTheSumOfMax(array) {
    return array.map((l) => Math.max(...l.split(' ').map((e) => parseInt(e)))).reduce((acc, curr) => acc + curr, 0);
}
