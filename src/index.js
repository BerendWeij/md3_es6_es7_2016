document.write('<p>Oude manier:</p><br />');
// oud
var oldWay = require('./modules/old_modules');

document.write(oldWay.fullname('Yassine', 'Gherbi'));
document.write(oldWay.initials('Yassine', 'Gherbi'));

document.write(oldWay.fullname('Idris', 'Dopico'));
document.write(oldWay.initials('Idris', 'Dopico'));

// variables
console.log('old:' + oldWay.letters);
console.log('old:' + oldWay.cijfers);

//
//
// ///////////////////////////////////////////////////////////////////////////////
//
//
//
document.write('<br /><p>Nieuwe manier:</p><br />');
// nieuw
import { initials, fullname } from './modules/modules';

import { letters as A } from './modules/modules';
import { cijfers as B } from './modules/modules';


document.write(fullname('Yassine', 'Gherbi'));
document.write(initials('Yassine', 'Gherbi'));

document.write(fullname('Idris', 'Dopico'));
document.write(initials('Idris', 'Dopico'));

// variables
console.log('new:' + A);
console.log('new:' + B);



///////////////////////////////////////////////////////////////////////////////



document.write('<br /><p>Nieuwe manier:</p><br />');


import User from './modules/classes';


var Student1 = new User('Yassine','Gherbi');
Student1.age('19');
Student1.length('170');

var Student2 = new User('Idris','Dopico Pena');
Student2.age('20');
Student2.length('175');

console.log(Student1);
console.log(Student2);


///////////////////////////////////////////////////////////////

import "babel-polyfill";

function *infinit (){
  while(true){
    yield 'yield 1';
    yield 'yield 2';
    yield 'yield 3';
  }
}

let iterator = infinit();

console.log(iterator.next()); // value: 'yield 1', done: false
console.log(iterator.next()); // value: 'yield 2', done: false
console.log(iterator.next()); // value: 'yield 3', done: false

// Wat komt hier uit??
console.log(iterator.next());

/*
1: value: 'undefined', done: true
2: value: 'undefined', done: false
3: value: 'yield 1', done: false // correct
4: value: 'yield 1', done: true
 */



var users = [
  {
    name: 'Jan',
    age: 18
  },
  {
    name: 'Piet',
    age: 18
  },
  {
    name: 'Henk',
    age: 18
  },
  {
    name: 'Idris',
    age: 18
  },
  {
    name: 'Yassine',
    age: 18
  },
  {
    name: 'Jimmy',
    age: 18
  },
  {
    name: 'Arnold',
    age: 18
  },
  {
    name: 'Harry',
    age: 18
  }
];

function *getData(users){
  //  get data and yield it, one item at a time
  for(var i = 0; i < users.length; i++ ){
    yield users[i];
  }
}

// only log 4 at a time
var max = 4;

// get the iterator (does not start iteration yet)
var user = getData(users);

// get the first iteration
var result = user.next();

// iterate the max number of times
var i = 0;
while((i < max) && !(result.done)){

  // render this one, assume it is synchronous
  console.log(result);

  // move on to the next one
  result = user.next();
  i++;
}



