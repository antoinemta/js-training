'use strict'

/*
 * Create an object `obj` that has a property for each primitive values
 * much like in primitive.js
 *
 * @notions Functions, Operators
 */

// Your code :

class ads {

	constructor(str,num,bool,undef)
	{
		this.str = str;
		this.num = num;
		this.bool = bool;
		this.undef = undef;
	}
	
	
}

let obj = new ads("1337",42,false,undefined);

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof obj, 'object')

assert.strictEqual(typeof obj.str, 'string')
assert.strictEqual(obj.str, '1337')

assert.strictEqual(typeof obj.num, 'number')
assert.strictEqual(obj.num, 42)

assert.strictEqual(typeof obj.bool, 'boolean')
assert.strictEqual(obj.bool, false)

assert.strictEqual(typeof obj.undef, 'undefined')
assert.strictEqual(obj.undef, undefined)
// End of tests */
