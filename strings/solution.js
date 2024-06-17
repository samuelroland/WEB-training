// Learn string manipulations, run these exos with PRJS

export function getNumberOfChars(text) {
    return text.length;
}

export function getLowercaseVersion(text) {
    return text.toLowerCase();
}

export function getFirstIndex(text, substring) {
    return text.indexOf(substring);
}

export function getFirstIndexButAfter(text, substring, startPos) {
    return text.indexOf(substring, startPos);
}

export function countOccurencesOfChar(text, char) {
    let count = 0;
    let idx = -1;

    while (count <= text.length) {
        idx = text.indexOf(char, idx + 1);
        if (idx != -1) count++;
        else break;
    }
    return count;
}

export function containsAGivenWord(text, word) {
    return text.includes(word);
}

export function extractAMessage(text) {
    return text.substring(text.indexOf(':') + 1, text.indexOf('.'));
}

export function extractACode(text) {
    return text.substr(text.indexOf('0x'), 3 + 2);
}

export function concatStrings(str1, str2, str3, str4) {
    return str1.concat(str2, str3, str4);
}

export function extractAllNumbers(text) {
    // Return all matches of the pattern: (1..* digit), (0..1 (dot and 1..* digits)), (0..1 (e and 1..* digits))
    return text.match(/\d+(\.\d+)?(e\d+)?/g);
}

export function buildAcronym(fullname) {
    const [first, last] = fullname.split(' ');
    return (first.at(0) + last.at(0) + last.at(last.length - 1)).toUpperCase();
}

export function countLengthOfWords(sentence) {
    return sentence.split(' ').map((w) => w.length);
}

export function getSomeFilesInGitignore(base64Content, extension) {
    return atob(base64Content)
        .split('\n')
        .filter((f) => f.endsWith('.' + extension));
}

export function getFromJSON(text) {
    return JSON.parse(text);
}

export function transformToJSON(obj) {
    return JSON.stringify(obj);
}

export function checkJsonValidity(text) {
    try {
        JSON.parse(text);
        return true;
    } catch (error) {
        return false;
    }
}

export function myLatestAnimal(talk, animal) {
    return talk.substring(talk.lastIndexOf(animal));
}

export function replaceFirstAndAll(sentence, first, firstReplace, all, allReplace) {
    return sentence.replace(first, firstReplace).replaceAll(all, allReplace);
}

export function parseExoWIP(raw) {
    const TITLE = 'Exo:';
    const SOLUTION = 'Solution:';
    const exoIdx = raw.indexOf(TITLE);
    const exoEndIdx = raw.indexOf('\n');
    const solutionIdx = raw.indexOf(SOLUTION);
    return {
        title: raw.substring(exoIdx + TITLE.length, exoEndIdx).trim(),
        instruction: raw.substring(exoEndIdx, solutionIdx).trim(),
        solution: raw.substring(solutionIdx + SOLUTION.length, raw.indexOf('\n', solutionIdx)).trim()
    };
}

export function parseParameters(command) {
    const QUOTE = '"';
    const parts = command.split(' ');
    const finalParts = [];
    let insideQuotes = false;
    let accumulator = '';

    for (const part of parts) {
        if (!insideQuotes) {
            if (part.startsWith(QUOTE)) {
                insideQuotes = true;
                accumulator = part.substr(1);
            } else {
                finalParts.push(part);
            }
        } else {
            if (part.endsWith(QUOTE)) {
                finalParts.push(accumulator + ' ' + part.substring(0, part.length - 1));
                insideQuotes = false;
            } else {
                accumulator += ' ' + part;
            }
        }
    }

    return finalParts;
}
