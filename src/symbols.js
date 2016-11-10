/*var generator = require("./generators/Example");
var example = new generator();

example.call(30);
*/

//----------------------------------------------------//----------------------------------------------------//

/*
 SYMBOLS
 A Symbol is an Immutable data type which has no specific type. It can be declared as an object in overall,
 as it doesn't need to be a String, Integer, etc.
 */

/*
Kahoot: Wat maakt een Symbol sneller efficienter dan een Object?
1. Hij is nieuwer dus sneller.
2. Hij gebruikt geen Wrapper.
3. De Syntax is anders.
4. Het is ES6 dus sneller met de compiler.
 */

let examples = {
    first: {
        exampleString: Symbol("example"),
        exampleInt: Symbol(1),
        exampleDouble: Symbol(1.1),
        exampleObject: Symbol({}),
    },
    second: {},
    third: {},
};

//error = new Symbol(), //This will give you a type error, this prevents the use of Wrappers, which is not efficient
try{
    error = new Symbol();
}catch (e){
    document.write("<i>" + e + "</i><br/><br/>");
}

//Assigning to a object by using a Wrapper (less efficient then using Symbol)
examples.second.exampleString = Object(examples.exampleString);
examples.second.exampleInt = Object(examples.exampleInt);
examples.second.exampleDouble = Object(examples.exampleDouble);
examples.second.exampleObject = Object(examples.exampleObject);

//Example of old use, you are now stricted to a different outcome.
examples.third.exampleString = "example";
examples.third.exampleInt = 1;
examples.third.exampleDouble = 1.1;
examples.third.exampleObject = Object();

showExamples([examples.first, examples.second, examples.third]);

function showExamples(examples) {
    if(examples instanceof Array){
        console.log(examples);
        for(let index = 0; index < examples.length; index++){
            document.write("<b>" + examples[index].exampleString.toString() + "</b> (" + typeof examples[index].exampleString + ")<br/>");
            document.write("<b>" + examples[index].exampleInt.toString() + "</b> (" + typeof examples[index].exampleInt + ")<br/>");
            document.write("<b>" + examples[index].exampleDouble.toString() + "</b> (" + typeof examples[index].exampleDouble + ")<br/>");
            document.write("<b>" + examples[index].exampleObject.toString() + "</b> (" + typeof examples[index].exampleObject + ")<br/><br/>");
        }
    }else {
        document.write("<b>" + examples.exampleString.toString() + "</b> (" + typeof examples.exampleString + ")<br/>");
        document.write("<b>" + examples.exampleInt.toString() + "</b> (" + typeof examples.exampleInt + ")<br/>");
        document.write("<b>" + examples.exampleDouble.toString() + "</b> (" + typeof examples.exampleDouble + ")<br/>");
        document.write("<b>" + examples.exampleObject.toString() + "</b> (" + typeof examples.exampleObject + ")<br/><br/>");
    }
}

//----------------------------------------------------//----------------------------------------------------//
