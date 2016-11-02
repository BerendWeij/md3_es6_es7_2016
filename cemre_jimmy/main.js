var def = "spread";

switch (def) {

case 'oud':
    function greet(greetings, name) {
        name = name || "default";
        //          var name = (typeof name !== 'undefined') ? name : "peter";
        document.write(greetings + ", " + name + "<br />");
    }
    greet("hey");
    greet("hallo", "henk");
    break;

case 'nieuw':
    function greet(greetings, name = "default") { //name is de default waarde
        document.write(greetings + ", " + name + "<br />");
    }
    greet("hey"); //als name niet word genoemd staat er standaard default
    greet("hallo", "henkie"); //als er een naam word genoemd word default overschreven
    break;

case 'rest':
    function rest(one, two, ...overig) {
        document.write(overig);
    }

    rest('1', '2', '3', '4', '5', '6');
    break;

case 'spread':

    let name = ['voornaam'];
    let lastname = ['achternaam', 'askkasd', 'sdasd'];

    //name.push(...lastname)

    name = name.concat(lastname);
    console.log(name);

    break;
}