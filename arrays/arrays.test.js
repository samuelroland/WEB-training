import { exo } from './helper';
import * as fns from './arrays.js';
import { expect, it } from 'vitest';

// Useful constants to work with
const animals = ['cat', 'dog', 'cow', 'chimp', 'chicken'];

// Exos list
exo({
	title: 'Create an empty array',
	fn: fns.getEmptyArray,
	tests: [{ expected: [] }]
});

function checkHugeArray(result, x, y) {
	expect(result?.length, 'Length is not correct').to.eq(x);
	const randomIndex = Math.ceil(Math.random() * x - 1);
	expect(result[randomIndex], 'Value at randomIndex=' + randomIndex + ' is not correct').to.eq(y);
}

exo({
	title: 'Create a huge array x elements filled with y',
	fn: fns.hugeFilledArray,
	tests: [
		{
			args: [100, 6],
			expect: (result) => {
				checkHugeArray(result, 100, 6);
			}
		},
		{
			args: [12, 59],
			expect: (result) => {
				checkHugeArray(result, 12, 59);
			}
		}
	]
});

exo({
	title: 'Push back values and remove at front',
	instruction: 'Here we will push 4 times 10 and pop front 2 times',
	fn: fns.pushAndRemove,
	tests: [
		{
			args: [[1, 2, 3], 4, 10, 2],
			expected: [3, 10, 10, 10, 10]
		},
		{
			args: [[1, 2, 3], 1, 2, 5],
			expected: []
		}
	]
});

exo({
	title: 'Take the last element in alphabetic order',
	fn: fns.getLastOfAlphabeticalOrder,
	tests: [
		{
			args: [JSON.parse(JSON.stringify(animals))],
			expected: 'dog'
		},
		{
			args: [JSON.parse(JSON.stringify([...animals, "zebra"]))],
			expected: 'zebra'
		},
	]
});

exo({
	title: 'remove element between 2 given values',
	fn: fns.removeInValueRange,
	tests: [
		{
			args: [['cat', 'dog', 'cow', 'chimp', 'chicken'], 'dog', 'chimp'],
			expected: ['cat', 'chicken']
		},
		{//cannot remove anything if first element is not found
			args: [animals, 'not found', 'chimp'],
			expected: animals
		},
		{//cannot remove anything if second element is not found
			args: [animals, 'cat', 'coooow'],
			expected: animals
		}
	]
});

exo({
	title: 'Extract a subrange of values (between index of first occurence of first arg, and last index of second arg included)',
	fn: fns.extractRange,
	tests: [
		{
			args: [[3, 1, 5, 6, 7, 2, 6, 1, 5, 2, 3, 6, 2, 3, 1, 5], 6, 3],
			expected: [6, 7, 2, 6, 1, 5, 2, 3, 6, 2, 3]
		}
	]
});

exo({
	title: 'uppercase and reverse the array',
	fn: fns.upperCaseAndReverse,
	tests: [
		{
			args: [['cat', 'dog', 'cow', 'chimp', 'chicken']],
			expected: ['CHICKEN', 'CHIMP', 'COW', 'DOG', 'CAT']
		}
	]
});

exo({
	title: 'filter an array basically',
	fn: fns.filterByInclude,
	tests: [
		{
			args: [animals, 'o'],
			expected: ['dog', 'cow']
		}
	]
});

exo({
	title: 'filter an array with a regex (h then i between 1 and 3 times and optionnaly an o)',
	fn: fns.filterHello,
	tests: [
		{
			args: [['hi', 'hiii', 'hiiio', 'h', 'ho']],
			expected: ['hi', 'hiii', 'hiiio']
		}
	]
});

exo({
	title: 'filter an array with a regex (like before but regex must match entire word)',
	fn: fns.filterHello2,
	tests: [
		{
			args: [['hi', 'hiii', 'hiiio', 'h', 'hiiii', 'ho', 'io', 'here hiiio and something else']],
			expected: ['hi', 'hiii', 'hiiio']
		}
	]
});

exo({
	title: 'filter an array with a more complex regex (0 to 3 letters between a and e, then numbers under 50)',
	fn: fns.filterCodes,
	tests: [
		{
			args: [
				[
					//pass
					'abc14',
					'bbd2',
					'eeb7',
					'aa37',
					'49',
					'15',
					'b03',
					//not pass
					'92',
					'ab120',
					'ziw12',
					'ko63'
				]
			],
			expected: ['abc14', 'bbd2', 'eeb7', 'aa37', '49', '15', 'b03']
		}
	]
});

exo({
	title: 'parse two lines of exo syntax into an exo object',
	fn: fns.parseExoWIP,
	tests: [
		{
			args: ["Exo:   What is the best OS ?\n That's a very neutral question...  " + ' \t \n\nSolution:  GNU/Linux   '],
			expected: {
				title: 'What is the best OS ?',
				instruction: "That's a very neutral question...",
				solution: 'GNU/Linux'
			}
		}
	]
});

exo({
	title: 'count words separated by strange separators',
	fn: fns.countAnyWords,
	tests: [
		{
			args: [['a\tnice   day', ['nice_job', 'nice_work', 'what--a_great job'], ['guess what ?', 'what ?_?----?', ' idk']]],
			expected: {
				'?': 4,
				a: 2,
				day: 1,
				great: 1,
				guess: 1,
				idk: 1,
				job: 2,
				nice: 3,
				what: 3,
				work: 1
			}
		}
	]
});

exo({
	title: "Calculate the 'product of words'",
	instruction: 'The product of word is simply a calculation of string length + index value.\nExample: [cow, chicken, ...] = (2+3) * (4+7) * ... = 5280\nNote: Do this in a single method call !',
	fn: fns.productOfWords,
	tests: [
		{
			args: [animals],
			expected: 5280
		}
	]
});

exo({
	title: 'Get the max values across all strings',
	fn: fns.getTheMax,
	tests: [
		{
			args: [['2 4 1 5 1 9 2 4 1', '0 3 1 4 1 6 2 5 1', '5 1 2 3 5 1 20 0 12']],
			expected: 20
		}
	]
});

exo({
	title: 'Get the sum of max values in each string',
	fn: fns.getTheSumOfMax,
	tests: [
		{
			args: [['2 4 1 5 1 9 2 4 1', '0 3 1 4 1 6 2 5 1', '5 1 2 3 5 1 20 0 12']],
			expected: 35
		}
	],
	instruction: 'The calculation is: 9 + 6 + 20 = 35'
});
