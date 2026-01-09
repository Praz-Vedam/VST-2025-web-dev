//Arithematic operators

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//Comparison operators
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

console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);
console.log(!isLoggedIn);

//UA+16

let age = 14;
let withAdult = true;

let canEnter = withAdult || age > 16;
// let canEnter = age > 16 || withAdult;

console.log("Can Enter ? " + canEnter);


//Precendence

console.log(5 + 10 * 2);    //25
console.log((5 + 10) * 2);  //30
console.log(20 / 5 * 2);    //8
console.log(2 ** 3 * 2);    //16
console.log(10 % 3 + 4);     //5



console.log(5 + 10 > 12);   //true 
console.log(5 + 10 > 20);    //F
console.log(5 + 5 === 10);   //T
console.log(5 + 5 === "10");  //F
console.log(10 > 5 == true); //T
console.log(10 > 5 === true);  //T


console.log("Check1----------")

console.log("5" + 5 * 2);    // "510"
console.log("5" + (5 * 2));  //"510"
console.log("5" + 5 + 2);   //"552" -> "5"+5 -> "55" + 2 -> "552"
console.log(5 + 2 + "5");  //"75"
true;

console.log("Praz2----------");
console.log(true + true + true); // 3 Coercion of true ->1 and false->0

console.log(909 + true + true); // coercion

