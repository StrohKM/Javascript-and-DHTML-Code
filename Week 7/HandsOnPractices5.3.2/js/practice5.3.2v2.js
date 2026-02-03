// const $ = function (id) { return document.getElementById(id); };

const elList = $('list');               // Get list
const addLink = $('add');
const counter = $('counter');            // Get item counter

function addItem() {                                    // Declare function
  let newItemIndex = elList.querySelectorAll('li').length;
  let newEl = document.createElement('li');                  // New <li> element
  let newContent = 'New list item #' + newItemIndex;    // New text content
  newEl.textContent = newContent;                            // Add text to <li>
  elList.appendChild(newEl);								// Add <li> to list
  updateCount();
}

function updateCount() {                                 // Declare function
  let listItems = elList.querySelectorAll('li').length;  // Get total of <li>s
  counter.textContent = listItems;                         // Update counter
}

addLink.addEventListener('click', addItem, false);       // Click on button

//The element for the click event will be the all <li> elements
const liItems = elList.querySelectorAll('li');

// step 2. define removItem() function so that 
function removeItem() {


}
// step 3. use event delegation, bundle event and event handler to <ul> element
// which is the parent element of all <li> elements



