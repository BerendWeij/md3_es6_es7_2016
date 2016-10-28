//Arrow functions - Jesse Vermeulen, Joris Bulter

/* Er zitten twee voordelen aan het gebruik van arrow functions vast:
		- De schrijfwijze is korter.
		- Er hoeft geen gebruik meer gemaakt te worden van 'bind()' of 'that = this'.
*/


//Oude schrijfwijze
var sayHello = function(message, name) {
	return message + name;
}


//Nieuwe schrijfwijze
var sayHello = (message, name) => {
	return message + name;
}

	//Maar het kan nog korter
	var sayHello = (message, name) => message + name;

	//Of met maar 1 parameter
	var sayHello = message => message

	//var is vervangen door let in ES6/7
	let sayHello = (message, name) => message + name;

	//Complex voorbeeld
	var deliveryBoy = {
		name: "Berend",
		handlemessage: function (message, handler) {
			handler(message);
		},
		receive: function (){
			this.handlemessage ("Hello ", message => console.log(message + this.name))
		}
		/* source: EggHead */
	}
