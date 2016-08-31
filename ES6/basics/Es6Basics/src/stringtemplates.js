
var message = "This is a string " + " concatenated with another string";

console.log(message);

var str = "Concatenated using templating";
var msg = `This is a string ${str}`

console.log(msg);
var x = 10;
var y = 20;
console.log(`Expressions such as ${x+y} can also be computed inline`);    // 30 printed out.

function parse(strings, ...values) {
    if (values[0] < 10) {
        strings[0] = "Above 10";
    } else {
        strings[0] = "Below 10";
    }

    return `${strings[0]} ${values[0]}`;
}

var value = 20;
message = parse`Initial 10 ${value}`;

console.log(message);


/** Spreads **/

// Binds all trailing arguments into an array
function f(x, ...y) {
    // Here y is an array of two elements ["Hello", false]
    console.log(y);
}

f(3, "hello", false);

// When used at the calling point, the elements of the array of separated out as individual arguments of the function
function add(x, y, z) {
    x = 1, y = 2, z = 5
    console.log(x + y + z);
}

add(...[1, 2, 5])


function g(x, ...y) {
    // y will be an array comprising of 4 elements ["World, 1, 4, 5]
    // If any arguments is an array, using ... at the function callee point will coalesce them into a single array.
    console.log(x);
    console.log(y);
}

g("Hello", "World", ...[1, 4, 5]);