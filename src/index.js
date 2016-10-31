var iterable = [10, 20, 30];
iterable.name = "Enumerable property";

//OLD
for (let value in iterable) {
    console.log(iterable[value]);
    //Index's zijn strings
    //Enumerable properties worden ook meegeteld
}
iterable.forEach(function (value) {
    console.log(value);
    //Je kan geen break of return gebruiken
    //Werkt alleen op arrays
});

//NEW
for (let value of iterable) {
    console.log(value);
    //Werkt met break, continue en return
    //Kan over bijna alles heen loopen
}

for (var chr of "😺😲") {
    //alert(chr);
}