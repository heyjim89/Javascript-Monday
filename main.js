// Variable Declarations
// var result = 10 / 3;
// alert(result);

// var greeting = 'Hello' + 'World';

// var eleven = '1'+'1';

// alert(eleven);
// 
// Properties
// 
// Strings have properties
// Bracket Notation


// dot-notation. Sometimes doesn't work
// alert(greeting.length);


// Strings are zereo indexed 
// 

// If-else Chain

// var age = 19;

var age = 19;
var canDrink;
var country = 'Ireland';
if ( age >= 21 ) {
	canDrink = true;
}
else if ( age >= 18 && country === 'Ireland' ){
	canDrink = true;
}
else {
	canDrink = false;
}

alert('Will you be serverd?' + canDrink);