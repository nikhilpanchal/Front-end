export function main() {
	console.log("Destructuring...");

	// Destructuring allows you to exposes partial attributes of your object for 
	// direct access.
	var {a, d} = {
		a: "A",
		b: "B",
		c: "C",
		d: "D",
		e: "E"
	};
	console.log(a);

	function abc() {
		return {
			name: "Nikhil",
			lastName: "Panchal",
			state: "New Jersey"
		};
	}

	var {name:firstName} = abc();
	console.log(firstName);

	// Works the same way with arrays, allows you to expose parts of the array
	// for direct access.

	var [first, , , fourth] = [1,2,3,4,5,6];
	console.log(`${first} ${fourth}`);

	// Object and Array destructuring can be combined nicely.
	var people = [{
		"name": "Nikhil",
		"lname": "Panchal",
		"sex": "Male"
	}, {
		"name": "Erica",
		"lname": "Panchal",
		"sex": "Female"
	}, {
		"name": "Aiden",
		"lname": "Panchal",
		"sex": "Male"
	}];

	var [nick] = people;
	logSex(nick);
	function logSex({sex}) {
		console.log(sex);
	};

	people.forEach(({name}) => {
		console.log(name);
	})
};