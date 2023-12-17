const symbol = Symbol();

const dogID = Symbol('dog');
console.log(dogID); //Symbol(dog)
console.log(dogID.description); //dog можно посмотреть описание

const dog1 = Symbol('dog');
const dog2 = Symbol('dog');

console.log(dog1);
console.log(dog2);

console.log(dog1 == dog2); //false

console.log(' ');

// let id = Symbol('dogID');
let id = Symbol('id');

let buddy = {
    [id]: 'Guchka'
}
console.log(buddy[id]); //Guchka

buddy[id] = "Bobik";
console.log(buddy[id]); //Bobik

console.log(' ');


