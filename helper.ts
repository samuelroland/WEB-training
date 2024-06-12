import { fail } from 'assert';
import { expect, test } from 'vitest';

export type ReturnTest = {
	args?: any[];
	expected: any;
};

export type AdvancedTest = {
    args: any[];
    expect: (_: any) => void;
};

export type Exo = {
    title: string;
    instruction?: string;
    fn: (...any) => any;
    tests: (ReturnTest | AdvancedTest)[];
};

function runTest(t, fn) {
    const result = fn(...(t.args ?? []));
    if (result === undefined) throw Error('No returned value in ' + fn.name);

    if (t.expected) {
        expect(result).to.deep.equal(t.expected);
    } else t.expect(result);
}

// Abstraction to declaratively define an exo
export function exo(exo: Exo) {
    test(exo.title, ({ task }) => {
        try {
            task.meta = { exo: { functionName: exo.fn?.name, ...JSON.parse(JSON.stringify(exo)) } };
        } catch (error) {
            console.log(error);
        }

        if (typeof exo.fn !== 'function') fail("Function not defined for the exo '" + exo.title + "' ...");

        if (!exo.tests) fail('No test has been defined for exo ' + exo.title);

        exo.tests.forEach((t) => runTest(t, exo.fn));
    });
}
