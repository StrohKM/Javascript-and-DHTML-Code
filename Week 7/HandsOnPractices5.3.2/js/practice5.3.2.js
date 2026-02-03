

const $ = function (id) { return document.getElementById(id); };

const elList = $('list');               // Get list
const addLink = $('add');
const counter = $('counter');            // Get item counter


function addItem() {                                    // Declare function
  let newItemIndex = elList.getElementsByTagName('li').length;
  let newEl = document.createElement('li');                  // New <li> element
  let newContent = 'New list item #' + newItemIndex;    // New text content
  newEl.textContent = newContent;                            // Add text to <li>
  elList.appendChild(newEl);								// Add <li> to list
  updateCount();
}

function updateCount() {                                 // Declare function
  var listItems = elList.getElementsByTagName('li').length;  // Get total of <li>s
  counter.textContent = listItems;                         // Update counter
}

addLink.addEventListener('click', addItem, false);       // Click on button

// step 1. Get remove item button
const removeButton = $("remove");
// For testing
console.log(removeButton);
// step 2. define an event handler
function removeItem() {                                    // Declare function
  // Find the last <li> element in the list
  let lastLi = elList.lastElementChild;
  if(lastLi !== null)
  {
    // Remove the last <li>
    lastLi.remove();
    updateCount();
  }
}
// step 3. bundle event and event handler to the remove item button
removeButton.addEventListener('click', removeItem);

function highLightItem(e)
{
  if(e.target.style.backgroundColor != 'grey')
  {
    e.target.style.backgroundColor = 'grey';
  }
  else
  {
    e.target.style.backgroundColor = e.target.parentElement.style.backgroundColor;
  }
}

// register highLightItem as the event handler for mouseover, mouseout events
// for each li element
//This was not working properly, so use code below instead
// let listItems = elList.querySelectorAll('li');
// listItems.forEach(item => item.addEventListener("mouseover", highLightItem));

// Note: this does not work for the new li added later through javascript program

//Use event delegation instead
elList.addEventListener("mouseover", highLightItem);
elList.addEventListener("mouseout", highLightItem);
