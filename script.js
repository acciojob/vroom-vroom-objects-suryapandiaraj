// Complete the js code
function Car(make, model) {
	this.make = make
	this.model = model
}

function SportsCar(make, model, topSpeed) {
	Car.call(make, model)
	this.topSpeed = topSpeed
}

function getMakeModel(){
	return `${make} ${model}`
}

function getTopSpeed(){
	return `${topSpeed}`
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
