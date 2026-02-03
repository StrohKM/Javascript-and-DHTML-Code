$(function() {

  // STORE EACH PERSON AS AN OBJECT IN AN ARRAY
  var people2 = {   //people2 is an object
    Bob: {                                              // Each person is an object
      rate: 60,
    },
    David: {
      rate: 80,
    },
    Jack: {
      rate: 75,
    },
 	Tom: {
      rate: 120,
    }
   };


  // THE FUNCTION ACTS AS A FILTER
  // Defeine priceRange() function
  function priceRange(person, index) { 
   //how to find the index of the person object in the array whose rate within the range?
	console.log(person);
		if(people2[person].rate >= 65 && people2[person].rate <= 120)
	    {
			console.log(index);
			console.log(person);
		    return true;
	    }
	    else	
		   return false;
	
  }
  // FILTER THE PEOPLE ARRAY & ADD MATCHES TO THE RESULTS ARRAY
  var results = [];   
  // Array for matching people
  var peopleArray = Object.keys(people2); 
  //console.log(peopleArray);
  results = peopleArray.filter(priceRange);           // filter() calls priceRange()
  //console.log(results);
  
  // LOOP THROUGH NEW ARRAY AND ADD MATCHING PEOPLE TO THE RESULTS TABLE
  var $tableBody = $('<tbody></tbody>');           // New table body
  for (var i = 0; i < results.length; i++) {       // Loop through matches
	    var person = results[i];                       // Store current person object	
		var $row = $('<tr></tr>');                     // Create a row for them
		$row.append($('<td></td>').text(person)); // Add their name
		$row.append($('<td></td>').text(people2[person].rate)); // Add their rate
		$tableBody.append( $row );                     // Add row to new content
	
  }

  $('thead').after($tableBody);                    // Add tbody after thead

});