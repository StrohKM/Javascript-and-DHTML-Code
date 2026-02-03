// Define a car object using a constructor function
// function Car( stockid, make, model, year, type, color, price, car_mileage) {
// 	this.stockid = stockid;
// 	this.make = make;
// 	this.model = model;
// 	this.year = year;
// 	this.type = type;
// 	this.color = color;
// 	this.price = price;
// 	this.mileage = car_mileage;

// 	this.display = function(){ //a method copied to each object instance
// 		var this_str = "<td>" + this.stockid + "</td><td>" + this.make + "</td>";
// 		this_str += "<td>" + this.model + "</td><td>" + this.year + "</td><td>" + this.type + "</td>";
// 		this_str += "<td>" + this.color + "</td><td> $" + this.price + "</td>";
// 		this_str += "<td>" + this.mileage + "</td>";
// 		return this_str;
// 	}
// }
//Define a car class
class Car {
	constructor(stockid, make, model, year, type, color, price, car_mileage) {
		this.stockid = stockid;
		this.make = make;
		this.model = model;
		this.year = year;
		this.type = type;
		this.color = color;
		this.price = price;
		this.mileage = car_mileage;
	}

	display() { // Define methods outside the constructor (stored on prototype, shared among object instances)
		let this_str = `<td>${this.stockid}</td><td>${this.make}</td>`;
		this_str += `<td>${this.model}</td><td>${this.year}</td><td>${this.type}</td>`;
		this_str += `<td>${this.color}</td><td>$ ${this.price}</td>`;
		this_str += `<td>${this.mileage}</td>`;
		return this_str;
	}
}


// Declare an array to hold Car objects
let car_list = [];

// Hiding the search result table first
$('#search-result').hide();

// step 2. Use a for loop to read each car info from web page by using jQuery selector and method
// and then create individual Car object by calling Car constructor function, 
// and add  each Car object to the car_list array



//step 3. add a JQuery UI datepicker to the <input> element with id="visitdate"
//set up the minDate in the datepicker is 2 days after current date




//Step-4: use jQuery selector and a jQuery event method to register searchList
//as the event handler to the search button
//so that when search button is clicked, a search result table will be displayed.



//hiding the search result table first
$('#search-result').hide();

/*****************************/
/* searchListing()          */
/*****************************/
function searchList() {

	const resultTableBody = $('#search-result tbody');
	resultTableBody.html(""); //clean up table body
	$("#search-result").hide();

	let resultMessage = $('#message');
	resultMessage.text(""); //clean up message

	let resultList = "";

	//step-5: Add JS code to complete this function
	//5.1: Add variable named keyword to store search keyword that use enters in the search bar 


	//5.2: if no keyword input, display a message says "Please enter a search keyword before press search button"
	//else: (1) set up count variable to count the number of cars found
	// (2) get the search category that user selected
	// (3) use filter method to find matched cars if there is any and update the count, define a findCar function
	// (4) display matched car(s) in search result table
	// (5) if no matched car found, display a message says "Did not find any matched car.". 



	//Hint: use  filter() method to find if each car in the car_list array is a matched car or not
	//define a findCar function return true, then add that car info by using Car object's display() 
	//method as part of the string for creating table row in search result table, and update count


}

//5.3: Define a function named findCar
function findCar(catSelect, keyword) {

}







