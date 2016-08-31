// Not supported in a browser at this time. Need babel or a similar transpiler.
import { add } from './math';
import deliveryBoy from './app';
import { main as destructure } from './desctructuring';

// console.log(add(2, 4));
// console.log(2);

// deliveryBoy.receive("Hello");

// The spread operator allows us to take the elements of an array
// and spread them out in its individual elements.
var array = [1,2,3];
// console.log(array);
// console.log(...array);

var second = [4,5,6];
// array.push(...second);
// console.log(array);

function addThreeThings(a, b, c) {
	return (a+b+c);
}

// console.log(addThreeThings(...array));
// console.log(addThreeThings(...second));

// console.log([
// 	...array,
// 	...second
// 	]);

destructure();