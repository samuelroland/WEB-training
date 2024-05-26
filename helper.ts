import { fail } from 'assert';
import { expect, test } from 'vitest';

export type ReturnTest = {
	args?: any[];
	expected: any;
};

export type AdvancedTest = {
	args: any[];
	expect: (any) => void;
};

export type Exo = {
	title: string;
	instruction?: string;
	fn: (...any) => any;
	tests: ReturnTest[] | AdvancedTest[];
};

type ExoMedataTask = Exo & {fnName: string}

function runTest(t, fn) {
	const result = fn(...(t.args ?? []))
	expect(result, "No returned value in " + fn.name).not.toBeUndefined();
	if (t.expected) {
		expect(result).to.deep.equal(t.expected);
	} else t.expect(result);
}

// Abstraction to declaratively define an exo
export function exo(exo: Exo) {
	test(exo.fn?.name + ": " + exo.title, ({task}) => {
		try {
			// const exoCopy : ExoMedataTask = {...exo, fnName :exo.fn?.name};
			// // @ts-ignore
			// task.meta.exo = exo
		} catch (error) {
			console.log(error)	
		}
		
		
		if (typeof exo.fn !== 'function') 
			fail("Function not defined for the exo '" + exo.title + "' ...");
		
		if (!exo.tests) 
			fail("No test has been defined for exo " + exo.title);
		
		exo.tests.forEach(t => runTest(t, exo.fn))
	});
}
