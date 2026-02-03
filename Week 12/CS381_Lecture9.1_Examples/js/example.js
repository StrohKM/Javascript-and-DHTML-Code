$(function () {

  // STORE EACH PERSON AS AN OBJECT IN AN ARRAY
  var people1 = [   //people1 is an array
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


  console.log(JSON.stringify(people2));
  // LOOP THROUGH NEW ARRAY AND ADD MATCHING PEOPLE TO THE RESULTS TABLE
  var $tableBody = $('<tbody></tbody>');           // New table body
  for (var i = 0; i < people1.length; i++) {       // Loop 
    var person = people1[i];                       // Store current person
    var $row = $('<tr></tr>');                     // Create a row for them
    $row.append($('<td></td>').text(person.name)); // Add their name
    $row.append($('<td></td>').text(person.rate)); // Add their rate
    $tableBody.append($row);                     // Add row to new content

  }
  /*
  people1.forEach(person => {
    let $row = $('<tr></tr>').append($('<td></td>').text(person.name)).append($('<td></td>').text(person.rate)); // Add their rate
    $row.appendTo($tableBody);
    $row.find('td').css("background-color", "#D3D3D3"); //light grey
  });
  */
  $(people1).each(function (index, person) {
    let $row = $('<tr></tr>').append($('<td></td>').text(person.name)).append($('<td></td>').text(person.rate)); // Add their rate
    $row.appendTo($tableBody);
    $row.find('td').css("background-color", "#D3D3D3"); //light grey

    //version-2:
    //let $row = `<tr><td>${person.name}</td><td>${person.rate}</td></tr>`;
    //$tableBody.html($tableBody.html() + $row);
  });

  var addPeople = function (person, name) {       // Loop 
    var $row = $('<tr></tr>');                     // Create a row for them
    $row.append($('<td></td>').text(name)); // Add their name
    $row.append($('<td></td>').text(person.rate)); // Add their rate
    $tableBody.append($row);                     // Add row to new content
    $row.find('td').css("background-color", "limegreen"); //light grey
  };

  for (var person in people2) //use for in loop to get keys in people2 object
  {
    addPeople(people2[person], person); //call addPeople function to add people
  }

  //Object.keys(people2).forEach( person => addPeople(people2[person], person));

  $('thead').after($tableBody);                    // Add tbody after thead
});

