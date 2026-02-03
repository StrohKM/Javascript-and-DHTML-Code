// define a function so that in js code, $ can be used to replace document.getElementById
		const $ = function (id) { return document.getElementById(id); };

		//define processEntries function
		const processEntries = function () {
			$('scoreTotal').value = "";
			$('scoreFinal').value = "";
			//causing my program to freak out for whatever reason so I'm commenting it out
			// $('result').textContent = ""; //Resetting the content so that the boxes/invalid input error message go away
			let errorMessage = "";
			let isValid = true;


			//Create an array for the scores
			let scores = [];
			let numInputs = document.querySelectorAll("input[value='100']").length;
			console.log(numInputs);

			for(let i = 1; i <= numInputs; i++)
			{
				//step-1: get test score from user input in the web page
				let inputScore = $('score' + i).value;
				//Converting inputScore into a number and getting rid of whitespace just in case
				inputScore = Number(inputScore.trim());
				console.log(inputScore);
				//Resetting the content so that the boxes/invalid input error message go away
				$(`score${i}_error`).textContent = "";
				//resetting className so that error message goes away
				$(`score${i}`).className = "";

				//step-2: validate inputs: 
				//test scores should be numerical data and non-negative value 
				//validate test score inputs
				if(isNaN(inputScore) || !Number.isInteger(inputScore) || inputScore < 30 || inputScore > 120)
				{
					isValid = false;
					//template literal string
					errorMessage += `test-${i} score is invalid!\n`;
					// Add error message besides the input box
					console.log(`score${i}_error`);
					$(`score${i}_error`).textContent = "invalid input";
					$(`score${i}`).className = "error";
					
				}
				// If input score is valid
				else
				{
					// Add valid input score to the scores array
					scores.push(inputScore);
				}
				// End of for loop
			}

			//step-3: if all inputs are valid test scores, calculate total score 
			if(isValid)
			{
				let totalScore = 0;
				//for of loop
				for(const score of scores)
				{	
					totalScore += score;
				}

				
				//step-4: determine the final grade based on totalscore	
				let finalGrade = "";
				finalGrade = totalScore >= 290 ? 'A': totalScore >= 240 ? 'B':
							 totalScore >= 210 ? 'C': totalScore >= 180 ? 'D': 'F';
				//step-5: display total score (with one decimal place) and final grade
				// Return totalScore with one decimal place as a string
				$('scoreTotal').value = totalScore.toFixed(1);
				$('scoreFinal').value = finalGrade;
			}
			else
			{
				//step-6: create a pop-up error message to display error messages 
				// if any of user inputs is incorrect
				$('result').style.whiteSpace = "pre"; //css added to allow apply \n as line break in the string
				$('result').textContent = errorMessage;
			}

		};  //end of processEntries function

		$("calculate").onclick = processEntries;
		$("score1").focus();