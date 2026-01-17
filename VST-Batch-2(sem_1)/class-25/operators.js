//Arithematic operators
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);
console.log(a ** b);

//Comparison operators

console.log("Comparison Operators");
let x = 10;
let y = "10";

console.log(x == y);
console.log(x === y);

console.log(3 > 5);
console.log(5 == "5");
console.log(5 === "5");
console.log(10 <= 10);
console.log(4 != 4);

//Logical Operators

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin); // false
console.log(isLoggedIn || isAdmin); // true
console.log(!isLoggedIn);           // false


//UA+16 

let age = 14;
let withAdult = false;

let canEnter = withAdult || age > 16;

console.log("Can Enter ?"+ canEnter);

//Precendence

console.log(5 + 10 * 2);  //25
console.log((5 + 10) * 2);  //30
console.log(20 / 5 * 2);    //8
console.log(2 ** 3 * 2);   //16
console.log(10 % 3 + 4);   //5



console.log(5 + 10 > 12);    //true
console.log(5 + 10 > 20); //false
console.log(5 + 5 === 10);     //true
console.log(5 + 5 === "10");  //false

console.log(10 > 5 == true); //true

console.log("5" + 5 * 2);  // "510"
console.log("5" + (5 * 2)); // "510"
console.log("5" + 5 + 2);   // "552" ("5"+5 -> "55".  "55"+2-> "552")
console.log(5 + 2 + "5");   //"75"   → (5 + 2 = 7; 7 + "5" = "75")
console.log("5" + true + true); //Coercion of true -> 1; false->0;




