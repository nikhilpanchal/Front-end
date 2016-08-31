
var deliveryBoy = {
    name: "Nikhil",

    handleMessage: function(message, handler) {
        handler(message);
    },

    receive: function() {
        var that = this;

//        this.handleMessage("Hello ", function(message) {
          // Here this refers to the scope of this function (function(message))
          // which is not the same scope of as that of the outer deliveryBoy object

//            console.log(message + that.name);
//        });

        // In arrow functions, "this" refers to the containing or parent scope. i.e. the scope thats
        // outside this function.
        // So you dont need to preserve the outer this in separate variables
        // like doing that = this.
        this.handleMessage("Hello ", (message) => {
            console.log(message + this.name);
        });
    }
};

// deliveryBoy.receive();
export default deliveryBoy;

const VALUE = "Fixed Value";

// This will throw an error.
//VALUE = "new Value";

// Const is a constant reference assignment not a value assignment.
const REF = {}

// This will work fine.
REF.field1 = 1
REF.field2 = 3
console.log(REF);

// But if you assign REF to some new reference that will throw the read-only error.
//REF = {foo: "bar"};

// Consts are applicable within its assigned scope.
if(true) {
    const foo = "bar";
    // This will work.
    console.log(foo);
}
// This will fail because the const foo doesn't exist outside the if scope
// console.log(foo);
