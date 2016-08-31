var map = new Map();

map.set("foo", "bar");
map.set("Hello", "World");

console.log(map.get("foo"));

console.log(map.has("whatsup"));

console.log(map.size);

for(var key of map.keys()) {
    console.log(key);
    console.log(map.get(key))
}

for(var value of map.values()) {
    console.log(value);
}

for(var [key, value] of map.entries()) {
    console.log(`Key: ${key}, Value: ${value}`);
}


map.clear();
console.log(map.size);

// No references are allowed to be held to the keys of the map making them eligable for garbage collection.
var wMap = new WeakMap();
// This will throw an error.
//wMap.set("foo", "bar");
// Allowed.
wMap.set(function() {}, "bar");

// No iterator methods available on weakmaps.