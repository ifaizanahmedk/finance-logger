
//Arrays
let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');
// names.push(3); // error
// names[1] = 25; // error
// names = 'hello'; // error

let numbers = [10, 20, 30];
numbers.push(40);
// numbers.push('shaun'); // error
// numbers[1] = 'luigi'; // error
// numbers = 'hello'; // error

let mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10); 
mixed[0] = 3;

// objects
let ninja = {
    name: 'yoshi',
    belt: 'black',
    age: 30
};

ninja.age = 40;
ninja.name = 'ken';
// ninja.age = '30'; // error
// ninja.skills = ['fighting', 'sneaking']; // error
// ninja = {}; // error


