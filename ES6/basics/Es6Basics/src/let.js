// Let allows you to declare a block scope specific variable.
// i.e. a variable created with let inside a code block will not exist outside
// the block.

test = function() {

    if (true) {
        // This will show x as undefined but won't throw any error.
        console.log("BEfore declaration " + x);
        // This will throw an error because y has not been defined yet.
//        console.log("Before declaration " + y);

        var x = 10;
        let y = 20;

        console.log(x);
        console.log(y);
    }

    console.log("Outside if: " + x);

    // This will fail because y does not exist outside the if block in which it was defined.
//    console.log("Outside if: " + y);


    var i = 0;
    for(i=0; i<10; i++) {
        var a = 10;
        let b = 20;


        // Here the abc function will get 10 different instances of b but the same instance of a
        abc = function(a, b) {
            console.log(a);
            console.log(b);
        };

        a++;
        b++;
    }
};

//test();


/** Short hand syntax **/
// Variables can be used to easily construct objects using the variable name as the object property name.
let firstName = "Nikhil";
let lastName = "Panchal";
let a = "run";
let b = "time";
//function go() {
//    console.log("Declared Go: Vroom !!");
//}

// Functions can also be added inline as the object literal is declared.
let person = {
    firstName,
    lastName,
    go() {
        console.log("Vroom !!");
    },
    [a+b]() {
        console.log("New function with computed property name");
    }
};
console.log(person);        // Prints out {firstName: "Nikhil", lastName: "Panchal"}
person.go()    // Prints out Vroom !!
person.runtime();


var fName = "Nikhil";
var lName = "Panchal";
var pers = {fName, lName};
console.log(pers);          // Prints out {fname: "Nikhil", lName: "Panchal"}

