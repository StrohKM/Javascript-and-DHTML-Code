	const products = [{
  id: 1,
  type: 'electronics',
  name: 'Audio Technica ATH-M50x',
  price: 119.99,
  quantity: 2
},
{
  id: 2,
  type: 'electronics',
  name: 'Sennheiser HD 202 II',
  price: 24.50,
  quantity: 5
},
{
  id: 3,
  type: 'electronics',
  name: 'GPX HM3817DTBK Micro System',
  price: 135.99,
  quantity: 1
},
{
  id: 4,
  type: 'electronics',
  name: 'Samsung MX-J630 2.0 Channel 230 Watt System',
  price: 117.99,
  quantity: 4
},
{
  id: 5,
  type: 'electronics',
  name: 'M-Audio Bass Traveler',
  price: 29.00,
  quantity: 9
},
{
  id: 6,
  type: 'electronics',
  name: 'HLED Strip light kit',
  price: 17.95,
  quantity: 5
},
{ id: 7, type: 'movies', name: 'Spectre', price: 19.99, quantity: 0 },
{
  id: 8,
  type: 'movies',
  name: 'Finding Dory',
  price: 19.99,
  quantity: 4
},

{
  id: 9,
  type: 'movies',
  name: 'Terminator: Genisys',
  price: 14.95,
  quantity: 3
},
{
  id: 10,
  type: 'movies',
  name: 'Interstellar',
  price: 12.00,
  quantity: 4
},
{
  id: 11,
  type: 'movies',
  name: 'Transformers: Age of Extinction',
  price: 9.95,
  quantity: 7
},
{
  id: 12,
  type: 'movies',
  name: 'Eye in the Sky',
  price: 14.95,
  quantity: 6
},
{ id: 13, type: 'movies', name: 'Venom', price: 22.99, quantity: 0 },
{
  id: 14,
  type: 'movies',
  name: 'The spy who dumped me',
  price: 29.00,
  quantity: 8
},
{
  id: 15,
  type: 'movies',
  name: 'Mamma Mia, Here We Go Again',
  price: 22.99,
  quantity: 4
},
{
  id: 16,
  type: 'electronics',
  name: 'M-Audio Bass Traveler',
  price: 29.00,
  quantity: 5
},
{
  id: 17,
  type: 'video-games',
  name: 'Battlefield 1',
  price: 59.99,
  quantity: 3
},
{
  id: 18,
  type: 'video-games',
  name: 'Overwatch',
  price: 40.00,
  quantity: 1
},
{
  id: 19,
  type: 'video-games',
  name: 'Gears of War 4',
  price: 59.99,
  quantity: 8
},
{
  id: 20,
  type: 'video-games',
  name: 'Titanfall 2',
  price: 59.99,
  quantity: 7
},
{
  id: 21,
  type: 'video-games',
  name: 'Sid Meier\'s Civilization VI ',
  price: 59.99,
  quantity: 4
},
{
  id: 22,
  type: 'video-games',
  name: 'The Sims 4',
  price: 39.99,
  quantity: 2
},
{
  id: 23,
  type: 'video-games',
  name: 'Grand Theft Auto V',
  price: 59.99,
  quantity: 7
}];
 
 /* Define an array to store the  selected product */
let my_cart = [];

// display product list
displayProducts();

function displayProducts() {
  let productInfo = '';
  // Read the product category
  const category = document.querySelector('#category').value;

  /* Display data: 
 Use a loop to go through each element in the products array.
 Each element is an object. We are going to use a table to display products.
 Use each product to create a table row. 
 Use the product's id to connect each product to a button
 so that whenever a button is clicked, the corresponding 'id' can be used to
 identify the selected product and then add to a cart.
  
*/
  if (category === "All") 
  {
	// Display all products, use forEach() method to call 
	// createProductItemInfo() function to create productInfo string
	// part-1.1: add js code here
  // p = product
    products.forEach(p => productInfo += createProductItemInfo(p));
  } 
  else 
  {
  //add js code here, Use the filter( ) method and then forEach( ) loop to display selected products. 
	// We can chain the two method into one statement.
	//part-1.2: add js code here
    products.filter(p => p.type === category).forEach(p => productInfo += createProductItemInfo(p));

	
  }

  // Display products list
  document.querySelector('#product-list').innerHTML = productInfo;
}


function createProductItemInfo(item) {
/* This function uses each product to create and return a string that defines a table row. */
  let trow = "";
  trow += `<tr><td>${item.name}</td><td>${item.type}</td><td>${item.price}</td>
  <td><button type='button' class="btn btn-primary" onclick="addItemToCart(${item.id})" >Add</button></td></tr>`;
  return trow;
}


function addItemToCart(id) {

/* Note: array-index cannot be used to identify products since we filter products based on the category.
Therefore, we can identify the selected product using its id and then add the product to the cart. 
*/
	// 1. Identify the product using its id 
	const selectedProducts = products.filter( p => p.id === id);
 
	// 2. Add the product to the 'my_cart' array
	/* filter() method returns an array. Since the id is unique, the selectedProducts is an array of one object.
		We can add that selected product to the cart.
	*/
	my_cart.push(selectedProducts[0]);
	
	// Display information about the products selected by using items in the 'my_cart' array
	displayCart();
}

function displayCart() {
	/* Recreate the list of selected products using  elements in the 'my_cart' array every time
		a product is added to or deleted from the list. 
	*/
	let total = 0; // store total cost
	let tRow = '';

	my_cart.forEach((item) => {
	/* Each item is a product (object). Use each item create a table row. */
    
		tRow += `<tr><td>${item.name}</td><td>${item.price}</td>
				<td><button type='button' onclick="deleteItemFromCart(${item.id})" 
				class="btn btn-danger" >Remove</button></td></tr>`;
		total += item.price;
	});

	// Re-display items in the cart
	document.querySelector("#cart").innerHTML = tRow;
	document.querySelector("#cost").innerHTML = total.toFixed(2);
}


function deleteItemFromCart(productId) {
// Use the id to filter all but the selected item from the my_cart array
	my_cart = my_cart.filter( p => p.id !== productId);
  
	// Re-display items in the cart
	displayCart();
}

//Practices:
//1. Find all the products with a price > 50. Hint: use filter() method
// After filter() method return a new array contains all matched products,
// then use forEach() method to print out each matched product in browser console
let matchedProductArray = products.filter(p => p.price > 50).forEach(p => console.log(p));
console.log(matchedProductArray);
matchedProductArray.forEach(p => console.log(p));

//2. Find all the electronics with a price greater than 100. Hint: use filter() method
matchedProductArray = products.filter( p => p.price > 100 && p.type === 'electronics');

//3. Calculate the revenue generated by each product :  revenue = price * quantity.  
//Display the revenue generated by each item in console
//Hint: use forEach() method. 
products.forEach(p => console.log("Revenue: $" + (p.price * p.quantity)).toFixed(2));

//4. Calculate the total revenue generated by all products, and display it in console
//Hint: use forEach() method
let totalRevenue = 0;
products.forEach(p => totaleRevenue += p.price * p.quantity);
console.log("TotalRevenue: $" + totalRevenue.toFixed(2));



//5. Calculate the total revenue generated by electronic items.
// reduce method can make this calculation more simple
let totalElectronicRevenue = products.filter(p => p.type === 'electronics').reduce((acc, p) => acc += p.price * p.quantity, 0);
console.log("TotaleRevenue from Electronics: $" + totalElectronicRevenue.toFixed(2));

//6. Sort the products by price, and print them in console
// => = return
// products.sort((a,b) => a.price - b.price); //Ascending order
products.sort((a,b) => b.price - a.price); //Descending order
console.log(products);
