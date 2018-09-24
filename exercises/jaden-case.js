'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

const jadenCase = (a) => {
	let j = 1;
	let word = '';
	for (let i=0; i<a.length; i++)
	{
		if (j==0 || i==0)
		{
			word = word + a[i].toUpperCase();
			j=1;
		}
		else
		{
			word = word + a[i];
		}
		
		if (a[i]==' ')
		{
			j = 0;	
		}
	}
	
	return word;
	
};

//* Begin of tests
const assert = require('assert')
assert.strictEqual(jadenCase('Hello boy'), 'Hello Boy')
assert.strictEqual(jadenCase('How old are you'), 'How Old Are You')
assert.strictEqual(jadenCase('Where are you from'), 'Where Are You From')
assert.strictEqual(jadenCase('How do you do ?'), 'How Do You Do ?')
assert.strictEqual(jadenCase('Hello girl'), 'Hello Girl')

// End of tests */
