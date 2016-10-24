class user{
   constructor (x, y) {
       this.positionX = x;
       this.positionY = y;
   }
   move (x, y) {
       this.x = x
       this.y = y
   }
   name(name) {
       return this.name = name
   }
}
var Artur = new user(150,20);
var Berend = new user(500,20);
console.log(Artur.name('Iets'));
console.log(Berend);