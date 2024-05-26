import { exo } from '../helper';
import * as fns from './strings.js';

// Useful constants to work with
const PANGRAM = "The quick brown fox jumps over the lazy dog"

// Exos list
exo({
	title: 'Get number of chars',
	fn: fns.getLength,
	tests: [{ args: [PANGRAM], expected: 43 }]
});

exo({
	title: 'Get number of occurences of given char',
	fn: fns.countOccurencesOfChar,
	tests: [{ args: [PANGRAM, 'o'], expected: 4 }]
});
