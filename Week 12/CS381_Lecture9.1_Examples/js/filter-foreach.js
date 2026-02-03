$(function() {

  // STORE EACH PERSON AS AN OBJECT IN AN ARRAY
  var people = [
    {                                              // Each person is an object
      name: 'Casey',                               // It holds name and rate
      rate: 60
    },
    {
      name: 'Camille',
      rate: 80
    },
    {
      name: 'Gordon',
      rate: 75
    },
    {
      name: 'Nigel',
      rate: 120
    }
  ];

  // CHECKS EACH PERSON AND ADDS THOSE IN RANGE TO ARRAY
  var results = [];  

  // Array for people in range
 //use anonymous function as the call back function in forEach() method 
 people.forEach(function(person) {    // For each person, you may use a name other than "person" to refer to each item in the array
	if (person.rate >= 65 && person.rate <= 90) {  // Is rate in range
	  results.push(person);                        // If yes add to array
    }
  });

//use a named function as the call back function in forEach() method
/*function priceRange(person) {                        // Declare priceRange() function first
    if(person.rate >= 65 && person.rate <= 90)
	results.push(person);
};
people.forEach(priceRange); 
 */
  // LOOP THROUGH NEW ARRAY AND ADD MATCHING PEOPLE TO THE RESULTS TABLE
  var $tableBody = $('<tbody></tbody>');           // New table body
  for (var i = 0; i < results.length; i++) {       // Loop through matches
    var person = results[i];                       // Store current person
    var $row = $('<tr></tr>');                     // Create a row for them
    $row.append($('<td></td>').text(person.name)); // Add their name
    $row.append($('<td></td>').text(person.rate)); // Add their rate
    $tableBody.append( $row );                     // Add row to new content
  }

  $('thead').after($tableBody);                    // Add tbody after thead
});