function askQuestions(){


	var firstName = prompt (`What is your first name?`);
	var lastName = prompt (`What is your last name?`);
	var fullName = firstName + ` ` + lastName;

	console.log(fullName);

	var age = prompt(`How old are you?`);
	age = parseInt(age);

	if (age >= 18){

		console.log(`User is an adult`);

	} else if(age >=13) {

		console.log(`User is a teenager`);
	} else{

		console.log(`User is a baby`);
	}

	if (firstName ==`General` && lastName !=`Assembly`)

	{

		console.log(`What\`s up General?`)
	}

}





// When the page has loaded
$(function() {

		// When the user clicks an h3 element
		$(`h3`).on(`click`,function() {

				// Toggle the next element
				$(this).next().slideToggle();

		});

});