//explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

//age = 'luigi'; //error
age = 30;


//isLoggedIn = 25; //error
isLoggedIn = true;

//arrays
let ninjas: string[] = [];

ninjas.push('shaun');
//ninjas.push(3); //error

let mixed: (string | number | boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string| number;
uid = '123';
uid = 123;
//uid = false; //error

//objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
};


ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' };
//ninjaTwo = { name: 'luigi', age: 25 }; //error

//any type
