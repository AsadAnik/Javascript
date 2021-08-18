// Javascript custom method Chaining..
function Car(){
	this.brand = '';
	this.model = 'F1';
	this.status = 'for sale';
}

Car.prototype.getName = function(){
	this.brand = 'Ferrari';
	return this;
}

Car.prototype.open = function(){
	this.status = 'Open for sale!';
	return this;
}

Car.prototype.close = function(){
	this.status = 'Closed & not for sale';
	return this;
}

Car.prototype.setParams = function(model){
	this.model = model;
	return this;
}

// Creating Object..
var Car = new Car();

// Chaining with Open status..
const closed = Car.getName().close().setParams('Fz');
console.log(closed);

// Chaining with Close status..
const opened = Car.open().getName().setParams('Formula-1');
console.log(opened);