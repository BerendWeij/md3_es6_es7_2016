// //orgineel, function scope
// var foo = "foo";
//
// //zelfde als var maar block scope
// let bar = "bar";
//
// //kan niet ge re-assigned
// const baz = "baz";
//
//
//
//

//var

function varTest() {
    var goo = true;

    if(true) {
        var goo = false;
        console.log(goo);
        //herschrijft de foo en zo wordt false
    }

    console.log(goo);
    //nog steeds false omdat het verranderd is.
}



//let

function letTest() {
    let roo = true;

    if(true) {
        let roo = false;
        console.log(roo);
        //herschrijft de foo en wordt false
    }

    console.log(roo);
    //wordt true
}
//zijn 2 verschillende variabelen



//const

const foo = "first thing";

foo = "second thing";

console.log(foo);
//laat zien:		alleen "first thing"



//met object
const boo = {
    one: "Hello",
    two: {
        three: "goodbye"
    }
};

foo.two.three = "not goodbye";


console.log(boo);
//laat zien://		one: Hello, two: {three: not goodbye}
//de const kan niet verranderd worden maar de keys wel
