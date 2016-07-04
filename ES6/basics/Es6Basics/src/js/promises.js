
var d = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(true) {
            resolve("Hello World!");
        } else {
            reject("No good");
        }
    }, 2000);
});

var def = d.then(data => {
    console.log(`Async: Promise resolved successfully ${data}`);

    if(false) {
        throw new Error("This is an error from promise #2");
    }

    return "This is from promise #2";
}).then((data) => {
    console.log(`Async 2: Second promise successfully resolved ${data}`)

    throw new Error(`This is an error from promise #3`);
}).catch(error => {
    console.log(`Async: Promise no Bueno ${error}`)
});

console.log("Synchronous execution of code");