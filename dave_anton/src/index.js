// Normal Function
let regFunc = function(message){
  return "Dit is een Normale functie!";
}
// Arrow Function met brackets en 2 parameters
let arrowFunc1 = (message,name) => {
  return "Dit is een Arrow functie! " + "Dave";
}
// Arrow Function zonder curly brackets dan is return niet nodig
let arrowFunc2 = (message,name) => "Dit is een Arrow functie! " + "Anton";
// Arrow Function met brackets en 1 parameter zonder return
let arrowFunc3 = (message) => {
  return "Dit is een Arrow functie!";
}
// Arrow Function zonder curly brackets
let arrowFunc4 = (message) => "Dit is een Arrow functie!";
// Arrow Function zonder round brackets,dat is aleen mogelijk met 1 parameter
let arrowFunc5 = message => {return "Dit is een Arrow functie!";}
// Arrow Function zonder brackets
let arrowFunc6 = message => "Dit is een Arrow functie!";

let arrowFunc7 = () => "Dit is een Arrow functie!";

document.write(arrowFunc6() + "<br><br>");

//------------------------------------------------------------------------------
// LET
//------------------------------------------------------------------------------

//Oude manier
var varTest = "Ja";

{
  //Door var verandert "varTest" naar deze waarde
  var varTest = "Nee"
}
document.write("Het antwoord is "+letTest + "<br>");

var varTest = [];
for (var i = 0; i < 10; i++) {
  //Met een var word alles overschreven met een 10
  varTest.push( function(){
    document.write(i + " ")
  });
}
varTest.forEach(function(f){
  f();
});

//De let manier
let Test = "Ja";

{
  //Door let blijft dit binnen de block en verandert er niks aan "Test"
  let Test = "Nee"
}

document.write("<br>" + "Het antwoord is "+letTest + "<br>");

let letTest = [];
for (let i = 0; i < 10; i++) {
  //Met een let word de waarden telkens opnieuw geschreven door dat een let
  //aleen in de zelfde block kan worden gebruikt dus word er telkens een lieuwe
  //gemaakt
  letTest.push( function(){
    document.write(i + " ")
  });
}
letTest.forEach(function(f){
  f();
});

//------------------------------------------------------------------------------
// CONST
//------------------------------------------------------------------------------

//Oude manier
var VAL = "Value";
//Je maakt een const meestal met alles in hoofdletters maar dat maakt het
//nogsteeds veranderbaar
VAL = "Not Value";
document.write("<br><br>" + VAL);

//Nieuwe manier
const val = "Value";
//Met een const krijg je de error dat het "read only" is dus kan je het niet veranderen
val = "Not Value";
document.write("<br>" + val);

//------------------------------------------------------------------------------
// proxies
//------------------------------------------------------------------------------
