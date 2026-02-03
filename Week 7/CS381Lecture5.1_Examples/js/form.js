
const elForm = document.getElementById('formSignup');          // Store elements
const elSelectPackage = document.getElementById('package');
const elPackageHint = document.getElementById('packageHint');
const elTerms = document.getElementById('terms');
const elTermsHint = document.getElementById('termsHint');

function packageHint() {                                 // Declare function
    // Get selected option
  let pack = this.value;
  if (pack === 'monthly') {                              // If monthly package
    elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';//Show this msg
  } else {                                               // Otherwise
    elPackageHint.innerHTML = 'Wise choice!';            // Show this message
  }
}

function checkTerms(event) {                             // Declare function
  if (!elTerms.checked) {                                // If checkbox ticked
    elTermsHint.innerHTML = 'You must agree to the terms.'; // Show message
    event.preventDefault();                              // Don't submit form
  }
  else
    elTermsHint.innerHTML = "";
}

//Create event listeners: submit calls checkTerms(), change calls packageHint()
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);