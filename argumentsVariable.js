// Functions Arguments Variable..
function example(){
	console.log(arguments);
}

example('Asad Anik', 'MacBook Pro');


// Accessing the specific aguments from variable..
function sumation(){
	console.log(arguments[0] + arguments[1]);
}

sumation(10, 40);


// Arguments with rest..
function exmapleRest(...args){
	const Address = `Address ${args[1]}, ${args[0]}`;
	console.log(Address);
}

exmapleRest(12, 'Road AP');