// Vitest tests as training exos to train a lot on array
import { describe, it, expect, fail } from "vitest";
import { ArrayUtil } from "./arrays";

describe("Tests", () => {
  const animals = ["cat", "dog", "cow", "chimp", "chicken"];
  const tests = [
    {
      title: "can create an empty array",
      fn: ArrayUtil.getEmptyArray,
      expected: [],
    },
    {
      title: "can create a huge array x elements filled with y",
      fn: ArrayUtil.hugeArray,
      args: [100, 6],
      expectation: (result) => {
        expect(result.length).to.eq(100);
        expect(result[Math.ceil(Math.random() * 100)]).to.eq(6);
      },
    },
    {
      title:
        "can push back values and remove at front (push 4 times 10 and pop front 2 times)",
      fn: ArrayUtil.pushAndRemove,
      args: [[1, 2, 3], 4, 10, 2],
      expected: [3, 10, 10, 10, 10],
    },
    {
      title: "can take last element in alphabetic order",
      fn: ArrayUtil.getLastAlphabeticalOrder,
      args: [["cat", "dog", "cow", "chimp", "chicken"]],
      expected: "dog",
    },
    {
      title: "can remove element between 2 given values",
      fn: ArrayUtil.removeInValueRange,
      args: [["cat", "dog", "cow", "chimp", "chicken"], "dog", "chimp"],
      expected: ["cat", "chicken"],
    },
    {
      title: "cannot remove anything if first element is not found",
      fn: ArrayUtil.removeInValueRange,
      args: [animals, "not found", "chimp"],
      expected: animals,
    },
    {
      title: "cannot remove anything if second element is not found",
      fn: ArrayUtil.removeInValueRange,
      args: [animals, "cat", "coooow"],
      expected: animals,
    },

    {
      title: "can create a huge array x elements filled with y",
      fn: ArrayUtil.hugeArray,
      args: [12, 59],
      expectation: (result) => {
        expect(result.length).to.eq(12);
        expect(result[Math.ceil(Math.random() * 12)]).to.eq(59);
      },
    },
    {
      title: "can uppercase and reverse the array",
      fn: ArrayUtil.upperCaseAndReverse,
      args: [["cat", "dog", "cow", "chimp", "chicken"]],
      expected: ["CHICKEN", "CHIMP", "COW", "DOG", "CAT"],
    },
    {
      title: "can filter an array basically",
      fn: ArrayUtil.filterByInclude,
      args: [animals, "o"],
      expected: ["dog", "cow"],
    },
    {
      title:
        "can filter an array with a regex (h then i between 1 and 3 times and optionnaly an o)",
      fn: ArrayUtil.filterHello,
      args: [["hi", "hiii", "hiiio", "h", "ho"]],
      expected: ["hi", "hiii", "hiiio"],
    },
    {
      title:
        "can filter an array with a regex (like before but regex must match entire word)",
      fn: ArrayUtil.filterHello2,
      args: [
        [
          "hi",
          "hiii",
          "hiiio",
          "h",
          "hiiii",
          "ho",
          "io",
          "here hiiio and something else",
        ],
      ],
      expected: ["hi", "hiii", "hiiio"],
    },
    {
      title:
        "can filter an array with a more complex regex (0 to 3 letters between a and e, then numbers under 50)",
      fn: ArrayUtil.filterCodes,
      args: [
        [
          //pass
          "abc14",
          "bbd2",
          "eeb7",
          "aa37",
          "49",
          "15",
          "b03",
          //not pass
          "92",
          "ab120",
          "ziw12",
          "ko63",
        ],
      ],
      expected: ["abc14", "bbd2", "eeb7", "aa37", "49", "15", "b03"],
    },
    {
      title: "can parse two lines of exo syntax into an exo object",
      fn: ArrayUtil.parseExoWIP,
      args: [
        [
          "Exo:   What is the best OS ? That's a very neutral question...  " +
            " \t \n\nSolution:  GNU/Linux   ",
        ],
      ],
      expected: {
        title: "What is the best OS ?",
        instruction: "That's a very neutral question...",
        solution: "GNU/Linux",
      },
    },
    {
      title: "can count words separated by strange separators",
      fn: ArrayUtil.countAnyWords,
      args: [
        [
          "a\tnice   day",
          ["nice_job", "nice_work", "what--a_great job"],
          ["guess what ?", "what ?_?----?", " idk"],
        ],
      ],
      expected: {
        "?": 4,
        a: 2,
        day: 1,
        great: 1,
        guess: 1,
        idk: 1,
        job: 2,
        nice: 3,
        what: 3,
        work: 1,
      },
    },
    {
      title:
        "can do 'the product of words' (each word is a calculation of string length + index value)",
      //in a single method call !
      fn: ArrayUtil.countLettersAndIndexesProduct,
      args: [animals],
      expected: 5280, //cow * chicken... = (2+3) * (4+7) ...
    },
  ];

  tests.forEach((test) => {
    if (typeof test.fn !== "function")
      fail("method for the test '" + test.title + "' has not been defined ...");

    it(test.title, () => {
      if (test.expected) {
        expect(test.fn(...(test.args ?? []))).to.deep.equal(test.expected);
      } else test.expectation(test.fn(...(test.args ?? [])));
    });
  });
});
