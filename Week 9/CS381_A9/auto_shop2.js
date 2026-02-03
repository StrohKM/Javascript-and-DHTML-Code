//Define a $ function
const $ = (id) => document.getElementById(id);

// Define a Car class
class Car {
	constructor(stockid, make, model, year, type, color, price, mileage) {
		this.stockid = stockid;
		this.make = make;
		this.model = model;
		this.year = year;
		this.type = type;
		this.color = color;
		this.price = price;
		this.mileage = mileage;
	}

	display() {
		let this_str = `<td>${this.stockid}</td><td>${this.make}</td>`;
		this_str += `<td>${this.model}</td><td>${this.year}</td><td>${this.type}</td>`;
		this_str += `<td>${this.color}</td><td>$${this.price}</td>`;
		this_str += `<td>${this.mileage}</td>`;
		return this_str;
	}
}

// Declare an array of objects
let car_list = [];  // var car_list = new Array();

// step 2. Use a for loop to read car info from web page
// and then create the Car object instances and 
// add individual car objects to the car_list array
var num = document.getElementsByClassName('car-item');
for (var i = 0; i < num.length; i++)
{
	// Grabbing all the information for each element in class
	let stockid = document.getElementById('id-'+ i).textContent;
	let make = document.getElementById('make-'+ i).textContent;
	let model = document.getElementById('model-'+ i).textContent;
	let year = document.getElementById('year-'+ i).textContent;
	let type = document.getElementById('type-'+ i).textContent;
	let color = document.getElementById('color-'+ i).textContent;
	let price = document.getElementById('price-'+ i).textContent;
	let mileage = document.getElementById('mileage-'+ i).textContent;

	// Creating new object
	let car = new Car(stockid, make, model, year, type, color, price, mileage);

	// Adding new car object to the car_list array
	car_list.push(car);
}



//step 3. apply event delegation for Add buttons, 
//by registering event handler "addItem" function to the click event to <table id='car-list'> element 
// Getting the first table element in the html file
// Then applying the event listener method to it
var carTable = document.getElementsByTagName('table')[0];
carTable.addEventListener('click', addItem, false);



// define an array to hold the index of the car added to the shopping chart
let cart = [];

//Step 4: add js code to complete addItem() function
//This  function defines an event handler that adds a car to shopping cart
function addItem(e) {
	//(1) Define a car index by using the value of the value attribute in each Add button element.  
	// Checking if the click event fires on an add button
	if (e.target.className.includes("add-item"))
	{
		// Use the event object to get value of clicked add button
		var index = e.target.value

		//(2) Save that car index into cart array. 
		// Adding index of selected product to the cart array
		cart.push(index);


		//(3) use the car index to find the corresponding car object in the car_list array and then call addNewItemtoCart function to add selected car info (make, type, and price) into the shopping cart table. 
		// Update the number of items in the shopping cart info on the web page
		document.getElementById('total-items').textContent = cart.length;

		// invoke the addNewItemtoCart() to display selected product identified by it's array-index
		addNewItemtoCart(car_list[index]);
		
	}
}

//Step 4:(4) Add js code in addNewItemtoCart function to create three new <td> elements in shopping chart (‘mycart’) table and append them to a new table row in shop cart table to display make, 
//type, and price of the selected car.
function addNewItemtoCart(item) {
	/* This function creates and adds a new table row to an existing table
	*/
	//create a new <tr> element: a table row
	let newTrElement = document.createElement('tr');

	//4.4.1:call createNewTdElement to create a <td> element using item.make as content
	//4.4.2: append it to the new tr element
	var newTdElement = createNewTdElement(item.make);
	newTrElement.appendChild(newTdElement);

	//4.4.3: call createNewTdElement to create a <td> element using item.model as content
	//4.4.4: append it to the new tr element
	var newTdElement = createNewTdElement(item.model);
	newTrElement.appendChild(newTdElement);

	//4.4.5: call createNewTdElement to create a <td> element using item.price as content
	//4.4.6: append it to the new tr element
	var newTdElement = createNewTdElement(item.price);
	newTrElement.appendChild(newTdElement);

	//append new <tr> element to the shopping cart
	$('mycart').appendChild(newTrElement);
}

function createNewTdElement(cell_content) {
	/* This function creates and returns a new table cell using  the following steps:
	 1. create a new text node using createTextNode() method
	 2. create a new 'td' element using createElement() method
	 3. append the newly created text node to the new 'td' element
	 4. return the newly created 'td' element
	*/
	// create a text node
	let newTextNode = document.createTextNode(cell_content);
	// create a new td element
	let newTdElement = document.createElement('td');
	// append text node to the new td element
	newTdElement.appendChild(newTextNode);
	return newTdElement;
}


//Step 5(1)Add js code to complete definition of the displayInvoice function
function displayInvoice() {
	//use the car index in the cart array to find the corresponding car object in the car_list array, 
	//and then calculate the total number of items in the shopping cart, 
	//subtotal, 6% taxes, 5% registration fees, and total amount. 
	//Display all those invoice information in the invoice table on the web page. 
	//If the shopping cart is empty, display a pop-up message saying “Your cart is empty!” 
	if (cart.length === 0)
	{
		alert("Your cart is empty!")
		return;
	}

	let subtotal = 0;
	let length = cart.length;
	for(let i = 0; i < length; i++)
	{
		let car = car_list[cart[i]];
		subtotal += parseFloat(car.price);
	}

	let tax = subtotal * .06;
	let registration = subtotal * .05;
	let total = subtotal + tax + registration;

	//REMEMBER: $ = document.getElementById($) where $ is the id you put in
	$('total-items').textContent = cart.length;
	$('sub-total').textContent = `$${subtotal.toFixed(2)}`;
	$('taxes').textContent = `$${tax.toFixed(2)}`;
	$('registration').textContent = `$${registration.toFixed(2)}`;
	$('total').textContent = `$${total.toFixed(2)}`;
}

//step 5(2)Add js code to Register displayInvoice function as the event handler to response to the click event 
//fires on the Display Invoice button.
$('p4').addEventListener('click', displayInvoice);


//Step 6 (1)Add js code to complete definition of the displaySedan function
function displaySedan() {
	//use a for loop to access each car object in car_list array, and check each car's type property
	//if a car's type property has value "Sedan", then create a new <tr> element
	//and then add new content and table cells to new <tr> element by using innerHTML, 
	//call car object's display() method to assign a string to innerHTML.
	let length = car_list.length;
	// getting sedanTableBody and clearing only the tbody elements of the first sedanTableBody it finds
	let sedanTableBody = $('sedan-list').getElementsByTagName('tbody')[0];
	sedanTableBody.innerHTML = '';

	for (let i = 0; i < length; i++)
	{
		if (car_list[i].type === "Sedan")
		{
			let newRow = document.createElement('tr');
			newRow.innerHTML = car_list[i].display();
			sedanTableBody.appendChild(newRow);
		}
	}
}
//step 6(2) Add js code to Register displaySedan function as the event handler
//to response to the click event fires on the Display all Sedans button. 
$('p2').addEventListener('click', displaySedan);
