
function charCount(e) {                                    // Declare function
  // Declare variables
  const textEntered = document.getElementById('message').value;  // User's text
  const charDisplay = document.getElementById('charactersLeft'); // Counter element
  let counter = (180 - (textEntered.length));                  // Num of chars left
  charDisplay.textContent = counter;                       // Show chars left
  let lastkey = document.getElementById('lastKey');            // Get last key elem
  lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode; // Create msg 
}

const el = document.getElementById('message');                   // Get msg element
el.addEventListener('keypress', charCount, false);  //on keypress - call charCount()
