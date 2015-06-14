//$(document).ready(function() {

//});
//FizzBuzz1
//for (var i = 0; i <= 100; i++) {

  // 	if ((i % 3 === 0) && (i % 5 === 0)) {
//		console.log ('FizzBuzz');
//	} else if (i % 3 === 0) {
//		console.log ('Fizz');
//	} else if (i % 5 === 0) {
//		console.log ('Buzz');
//	} else  {
//		console.log (i);
//	}
//}


//FizzBuzz2
//When the page loads, the user should be prompted to supply a number. The easiest way to do this would be with the prompt() function, but you should also feel free to create a simple text input with text telling the user to input a number.
function promptMessage() {

	var number = prompt("Please enter a number in numeric form, such as 1.");
	if (number != null){
		alert("You selected" + number);
	}
	
	else {	
		alert("You did not enter a numeral. Please try again.");
	}
}

//or

var i = prompt('Please enter a number'); 

function checkInput() {
    
    if (isNan(i)) {
        alert('You must enter a number!');
        return false;
    }
}


// start the loop
    for (var i = 0; i < arguments.length; i++) {
      m += arguments[i] + ' ';
    }



checkInput();


parseInt(string, radix);


isNaN(NaN);       // true


num % 1 != 0
// 23.5 % 1 = 0.5



//	var number = prompt("Please enter a number in numeric form, such as 1.");
//		alert("You selected " + number);


