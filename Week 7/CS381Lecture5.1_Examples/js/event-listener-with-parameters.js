const elUsername = document.getElementById('username');   // Username input
const elMsg = document.getElementById('feedback');   // Error msg element

function checkUsername(minLength) {                     // Declare function
  if (elUsername.value.length < minLength) {            // If username too short
    // Set the error message
    elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
  } else {                                             // Otherwise
    elMsg.innerHTML = '';                              // Clear msg
  }
}
//If in the case pre-defined functions have parameters, how to use them as event handler? 
//NOTE: can not use a pre-defined function with parameters as event handler directly when adding event listener
elUsername.addEventListener('blur', function () { checkUsername(8); });
elUsername.addEventListener('blur', function () { alert("This is addEventListener!") });

