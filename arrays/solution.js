// A class with static methods to train array manipulation in JS
export class ArrayUtil {
  //TODO: create static methods here to make all tests green !

  static getEmptyArray() {
    return [];
  }

  static hugeArray(size, value) {
    return new Array(size).fill(value);
  }

  static pushAndRemove(list, toPush, pushTimes, toShift) {
    list.push(...new Array(toPush).fill(pushTimes));
    for (let i = 0; i < toShift; ++i) {
      list.shift();
    }
    return list;
  }

  static getLastAlphabeticalOrder(list) {
    return list.sort()[list.length - 1];
  }

  static removeInValueRange(list, first, second) {
    const firstIndex = list.indexOf(first);
    const secondIndex = list.indexOf(second);
    if (firstIndex == -1 || secondIndex == -1) return list;

    list.splice(firstIndex, secondIndex - firstIndex + 1);
    return list;
  }

  static extractRange(list, first, last) {
    return list.slice(list.indexOf(first), list.lastIndexOf(last) + 1);
  }

  static upperCaseAndReverse(list) {
    return list.reverse().map((e) => e.toUpperCase());
  }

  static filterByInclude(list, snippet) {
    return list.filter((e) => e.includes(snippet));
  }

  static filterHello(list) {
    const re = /hi{1,3}o?/;
    return list.filter((e) => re.test(e));
  }

  static filterHello2(list) {
    const re = /^hi{1,3}o?$/;
    return list.filter((e) => re.test(e));
  }

  static filterCodes(list) {
    const re = /^[a-e]{0,3}(\d|[0-4]\d)$/;
    return list.filter((e) => re.test(e));
  }

  static parseExoWIP(text) {
    const lines = text.split("\n");
    const exo = { instruction: "" };
    const TITLE_PREFIX = "Exo:";
    const SOLUTION_PREFIX = "Solution:";

    for (const line of lines) {
      if (line.startsWith(TITLE_PREFIX)) {
        exo.title = line.substr(TITLE_PREFIX.length).trim();
      } else if (line.startsWith(SOLUTION_PREFIX)) {
        exo.solution = line.substr(SOLUTION_PREFIX.length).trim();
      } else {
        exo.instruction += line;
      }
    }

    exo.instruction = exo.instruction.trim();
    return exo;
  }

  static countAnyWords(list) {
    const words = list
      .flat()
      .reduce((acc, el) => acc.concat(el.split(/[-_\s]/)), []);

    const counters = {};
    for (const word of words) {
      if (word.trim() == "") continue;
      if (!counters[word]) {
        counters[word] = 0;
      }
      counters[word]++;
    }

    return counters;
  }

  static countLettersAndIndexesProduct(list) {
    return list.reduce((acc, el, i) => acc * (el.length + i), 1);
  }

  static getTheMax(list) {
    return Math.max(
      ...list.flatMap((l) => l.split(" ").map((e) => parseInt(e)))
    );
  }
  static getTheSumOfMax(list) {
    return list
      .map((l) => Math.max(...l.split(" ").map((e) => parseInt(e))))
      .reduce((acc, curr) => acc + curr, 0);
  }
}
