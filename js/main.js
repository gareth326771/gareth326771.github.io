	function askQuestions() {

	var firstName = prompt('what is your first name?');
	var lastName = prompt('what is your last name?');

	var fullName = firstName +' '+ lastName;

	if (firstName === 'General' && lastName != 'Assembly'){

		console.log('User General but not Assembly');
		alert('Hello General');
	}


	if (firstName === 'General' && lastName === 'Assembly'){

		console.log('User General Assembly');
		alert('Hello General Assembly');
	}

	var age = prompt('What is your age bitch?')

	parseInt(age)

	if (age >= 18){

		console.log('User is adult')
		alert('Welcome adult')

	}

	if (age < 18){

		console.log('Usewr is child')
		alert('Go away child!')

	}

	var faveColour = prompt('What is your favourite colour?').toLowerCase();

	if (faveColour == 'red' ||
		faveColour == 'green'||
		faveColour == 'blue'||
		faveColour == 'yellow'){

		$('h2').css('color', faveColour);
			
	}
}

// When the page has loaded
$(function(){

	// When the user clicks the image, run askQuestions;
	$('img').on('click', askQuestions);

	//Hide all the things
	$('h3').next().hide();

	//When the user clicks on an h3
	$('h3').on('click',function() {

		//Toggle the next text element
		$(this).next().slideToggle(5); 

	});
	
});