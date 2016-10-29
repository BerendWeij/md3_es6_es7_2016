/**
 * Created by Remco on 26-9-2016.
 */

'use strict';
/**
 * A Generator constructor (can be recognized by the '*' after the function)
 * This will create the constructor, which will save the values that will be passed to every function (which will call the constructor)
 * By using the keyword 'yield' you can pause and continue the generator.
 * Everything in the do, while function will be passed to the value whenever you call 'next()', as long as it has the keyword 'yield' before it.
 * Whenever calling yield, the generator will get paused when calling 'next()', you wont be able to pass multiple values for a yield as it only accepts one value.
 * @constructor
 */

/*
 Kahoot: Op welk woord returned de Generator zijn value?
 1. return
 2. throw
 3. yield
 4. generate
 */

function* Generator() {

    //This is where the index starts, this will be the default value where it all starts.
    var index = 0;

    //This is all of the context (a example value)
    var context = [
        "Hello", "World", "Welcome", "to", "my", "generator", "which", "i", "made", "with", "NodeJS", "and", "EC6"
    ];

    //Do something (while true) in this case
    do {
        //Check if Math.random() (a value between 0.0 and 1.0) is higher or equal to 0.5
        if(Math.random() >= 0.5) {
            //Return, stop and save the current value:
            yield context[index - 1] === undefined ? context[0] : context[index - 1];
        }else{
            //Return, stop and save the current value:
            yield index += 1;
        }
    } while (true);
}

module.exports = class Example {

    constructor() {
        //Call a new Generator
        this.generator = new Generator();
    }

    call(amount) {
        //Check if amount is a number
        if(typeof amount == "number") {
            //Default value.
            var string = "";
            //Loop 30 times
            for (var i = 0; i < amount; i++) {
                //Add the outcoume of the next().value
                string += this.generator.next().value + " ";
            }
            //Console log the final String
            console.log(string);
        }else{
            //Error
            console.log("Invalid amount, please use a number");
        }
    }
};