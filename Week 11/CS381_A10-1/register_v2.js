const $ = function (id) { return document.getElementById(id); };

const emailEle = $("email_address");
const phoneEle = $("phone");
const countryEle = $("country");
const termsCheckBox = $("terms");
const mailingAddressEle = $('mailingAddress');
const commentsBox = $("comments");


const processEntries = function () {
	let isValid = true;
	// get values for user entries   
	let email = emailEle.value;
	let phone = phoneEle.value;
	let country = countryEle.value;
	let terms = termsCheckBox.checked;
	// check user entries for validity
	if (email === "") {
		emailEle.nextElementSibling.textContent = "This field is required.";
		isValid = false;
	}
	else {
		emailEle.nextElementSibling.textContent = "";
	}
	if (phone === "") {
		phoneEle.nextElementSibling.textContent = "This field is required.";
		isValid = false;
	}
	else {
		phoneEle.nextElementSibling.textContent = "";
	}
	if (country === "no-option") {
		countryEle.nextElementSibling.textContent = "Please select a country.";
		isValid = false;
	}
	else {
		countryEle.nextElementSibling.textContent = "";
	}
	if (terms === false) {
		termsCheckBox.nextElementSibling.textContent = "This box must be checked.";
		isValid = false;
	}
	else {
		termsCheckBox.nextElementSibling.textContent = "";
		termsCheckBox.value = "yes";
	}
	if (isValid) {
		$("registration_form").submit();
	}
};

const radioChanged = function () {
	$('addressLabel').className = $("mail").checked ? '' : 'hide';     // Text input visibility
	mailingAddressEle.className = $("mail").checked ? '' : 'hide';
}

const resetForm = function () {
	$("registration_form").reset();
	$('addressLabel').className = 'hide';  // Hide label for that mailing address textarea
	$('mailingAddress').className = 'hide';  // Hide mailing address textarea
	$("email_address").nextElementSibling.textContent = "*";
	$("phone").nextElementSibling.textContent = "*";
	$("country").nextElementSibling.textContent = "*";
	$("terms").nextElementSibling.textContent = "*";
	$("email_address").focus();

	//step 4: reset form data in the local storage as well.
	//add js code here
	localStorage.clear();

};

$("register").addEventListener('click', processEntries);
$("reset_form").addEventListener('click', resetForm);
$("email_address").focus();

let options = document.querySelectorAll("input[name='contact']");		// Get the radio buttons
console.log(options);
// Add event listener to each radio buttons        
options.forEach(option => option.addEventListener('click', radioChanged)); // If event listener supported                               

//step 1: define function writeToStorage()
const writeToStorage = () =>
{
	//add js code here
	[emailEle, phoneEle, countryEle, termsCheckBox,
	 mailingAddressEle, commentsBox].forEach(
		ele => localStorage.setItem(ele.id, ele.value));
}

//step 2: define function retrieveData()
const retrieveData = () =>
{
	//add js code here
	[emailEle, phoneEle, countryEle, termsCheckBox,
	 mailingAddressEle, commentsBox].forEach(
		ele => ele.value = localStorage.getItem(ele.id) ?? '');
}
//step 3: add js code to check whether the web page is loaded to browser window for the first time
//If yes, then call writeToStorage function to save data into the local storage. 
//If no, then call retrieveData function to retrieve data from the local storage. 
//add js code here
window.addEventListener("load", function ()
{
	if(localStorage.getItem("isFirstLoad") === null)
	{
		alert("First-time load page.");
		writeToStorage();
		localStorage.setItem("isFirstLoad", "true");
	}
	else
	{
		this.alert("reload page")
		retrieveData();
	}
});

//step 5: add js code here to apply event delegation approach by 
//adding event listener to the 'change' and 'input' events and 
//writeToStorage event handler to the <form> element.
//add js code here
const formEle = $("registration_form");

formEle.addEventListener("input", writeToStorage);
formEle.addEventListener("change", writeToStorage);
//Note: do not remove or change radioChanged() function call here.
//leave it as the last statement in the JS program here.
radioChanged();
//end of the JS program










