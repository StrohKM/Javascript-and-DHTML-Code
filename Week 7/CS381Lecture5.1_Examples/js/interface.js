function setup() {                                  // Define function named setup
  const textInput = document.getElementById('username');  // Get username input box
  textInput.focus();   								// Give username input box focused, trigger focus event, 
  //and then default action related to this event will be done by web browser
  textInput.value = "call set up function";
  console.log(textInput.value);
}


window.onload = setup;  //After the html page is loaded, call and execute setup function
// Register setup function as "load" event handler. 

window.onresize = function () { alert("window is resized. "); };

window.onscroll = function () { alert("You scroll the page."); };










