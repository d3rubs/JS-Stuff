//container function calculate
function calculate() {		
	'use strict';
	
	//declare variables for 
	var future_value;

	//references to form values
	var investment = document.getElementById('investment').value;
	var interest_rate = document.getElementById('interest_rate').value;
	var years = document.getElementById('years').value;

	//interest rate format
	//interest_rate = interest_rate.toFixed(2);
	
	//add validation (soon)

	//Calculate future value
	
	var n_investment = Number(investment);  //convert from string to number
	future_value = n_investment + (investment * interest_rate * years);
	
	//display future value
	document.getElementById('future_value').value = future_value;
	
	//return false to prevent submission
	return false;
}	//end of calculate function

//fuction called when the window has been loaded
//function needs to add an vent listener to the form
function init()	{
	'use strict';
//add an event listener to the form
	var theForm = document.getElementById('theForm');
	theForm.onsubmit = calculate;

}	//end of init function

//assign an event listener to the windows load event:
window.onload = init;
