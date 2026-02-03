
function checkUsername() {                            // Declare function, e refers to event object
  const elMsg = document.getElementById('feedback');    // Get feedback element
  if (this.value.length < 5) {                        // If username too short
    elMsg.textContent = 'Username must be 5 characters or more';  // Set msg

  } else {                                            // Otherwise
    elMsg.textContent = '';                           // Clear message
  }
  console.log("run checkUsername function");
}
const elUsername = document.getElementById('username'); // Get username input
elUsername.focus();  //user name input box is auto-focused after the web page is loaded to browser window 
elUsername.onblur = checkUsername;  // When it loses focus call checkuserName()
/*elUsername.onblur = function() {
  alert("check user name.");
  console.log("run alert function");
}   
*/
