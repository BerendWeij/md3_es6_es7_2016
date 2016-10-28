/**
 * Created by Joël Mik & Donovan Roubos on 25/10/2016.
 * TEMPLATE STRINGS
 *
 * Alles dat wordt behandeld in dit script:
 * - De syntax
 * - String substitution
 * - Multiline strings
 * - Tagged strings
 */


//-----------------
// SYNTAX
//-----------------
//De basic syntax van "Template Strings" is hetzelfde als normale strings,
//er wordt hier alleen gebruik gemaakt van backticks(`) inplaats van single- of doublequotes.

let message = `How are you?`;
console.log(message);

//Als je in je string backticks wilt gebruiken kun je dat door een backslash ervoor te plaatsen.

let message2 = `\`How\` are you?`;
console.log(message2);

// Single- en doublequotes kunnen in deze strings worden gebruikt.

let message3 = `'how' "are" you?`;
console.log(message3);

//-------------------
// MULTI LINE STRINGS
//-------------------

//Met multi line strings kan je een string maken van meerdere regels.
// In ES5 kon dit al door middel van (\n\).

var message4 = "This is a \n\
Multi line string";

console.log(message4);


//Met ES6 wordt dit heel gemakkelijk gemaakt.

let message6 = `This is a
multi line string`;
console.log(message6);

//Alle spaties en tabs worden ales "white spaces" gezien.

let message7 = `This is a
                                multi line String`;
console.log(message7);
console.log(message7.length);  //78

//--------------------
// STRING SUBSTITUTION
//--------------------

// Met string substitution kan je variables, functions, etc. toevoegen aan je string.
// Als je iets toevoegd moet je het tussen ${ } plaatsen.

let name = "joel";
console.log(`Ewa, ${name}!`);

function fn() { return "ik ben een functie in een string!"; }
console.log(`${fn()}`);

// Je kan de variabelen natuurlijk zo vaak als je wilt gebruiken ik een template string
console.log(`Mijn naam is ${name.toUpperCase()} en mijn moeder noemt mij ${name.toUpperCase()} en mijn vrienden noemen mij ${name.toUpperCase()}`);


//Je kan opsommingen toevoegen

let a = 10;
let b = 10;
console.log(`JavaScript first appeared ${a+b} years ago. Crazy!`);

// De ${} gaat goed samen met alle expressies en methodes

let user = {name: 'Donovan Roubos'};
console.log(`Dit is mijn naam in hoofdletters, ${user.name.toUpperCase()}.`);

