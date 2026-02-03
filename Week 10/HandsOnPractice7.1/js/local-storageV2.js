
const txtUsername = document.getElementById('username'); // Get form elements
const txtAnswer = document.getElementById('answer');

if (localStorage.getItem('username'))
  txtUsername.value = localStorage.getItem('username');  // Elements populated
else
  localStorage.setItem('username', txtUsername.value);

if (localStorage.getItem('answer'))
  txtAnswer.value = localStorage.getItem('answer');      // by localStorage data
else
  localStorage.setItem('answer', txtAnswer.value);

txtUsername.addEventListener('input', function () {    // Data saved on keyup
  localStorage.setItem('username', txtUsername.value);
}, false);

txtAnswer.addEventListener('input', function () {      // Data saved on keyup
  localStorage.setItem('answer', txtAnswer.value);
}, false);

// part(b) add js code so that when reset button is clicked, 
// the data stored in local storage is also cleaned up
document.getElementById('reset').addEventListener('click', function()
{
  localStorage.removeItem('username');
  localStorage.removeItem('answer');
});

// part(c) add js code to display keys/names of storage items 
// in the console area in the developer tool in web browser.
Object.keys(localStorage).forEach(ele => console.log(ele));
Object.entries(localStorage).forEach(([key, value]) => console.log(key + ": " + value));


