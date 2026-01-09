// let a = 10; // global scope

// function test() {
//   let b = 20; //  functional scope
//    if(true){
//   let c = 30; //block scope
//   }
//   console.log(b); // 20
//   console.log(c); //Error
//   console.log(a); //10
// }

// test();

// if(true){
//    var a = 10; // Dangerous in real life projects, accessible outside
//    let b = 20;
//    const c = 30;
// }

// console.log(a) //10
// console.log(b) // Error
// console.log(c); //  Error

//q1.1
// let a = 10;
// let a = 20;
// console.log(a); //Error

//q1.2
// var a = 10;
// console.log(a); //10
// var a = 20;
// console.log(a); //20

//q2.1
// function test() {
//     let x = 100;
//     console.log(x); //100
// }
// test();
// console.log(x+10); //Error

//q2.2
// function test() {
//     var x = 100;
//     console.log(x); //100
// }
// test();
// console.log(x+10); //Error

//q3.1
// if (true) {
//     let ss = "active";
//     console.log(ss); //active
// }
// console.log(ss); //Error

//q3.2
// if (true) {
//     var ss = "active";
//     console.log(ss); //active
// }
// console.log(ss); //active

// q4.1
// for (let i = 0; i < 3; i++) {
//     console.log("Inside loop:", i); //0 1 2
// }
// console.log("Outside loop:", i); //Error

// q4.2
//  for (var i = 0; i < 3; i++) {
//     console.log("Inside loop:", i); // 0 1 2
// }
// console.log("Outside loop:", i);// 3

// q5.1

// let value = 10; // Global context - global scope

// function display() {
//     let value = 20;// function display context - block/functional scope
//     console.log(value);//20
// }

// display();
// console.log(value);//10

// q5.2
// var value = 10; // GEC

// function display() {
//     let value = 20;  // FEC
//     console.log(value); // 20
// }

// display();
// console.log(value); // 10

//EXAMPLE for scope-chain
// let x = 10;
// function outer(){
//     let y = 20;
//   function inner(){
//         let z = 30;
//         console.log(x, y, z); //10
//     }
//   inner();
// }

// console.log(y);
// outer();

//q7.1 Lexical scope
// function a() { //function create
//     console.log("inside ", x); //10
// }

// function b() {
//     var x = 20; //
//     console.log("value of x in fun b", x); //20
//     a(); // function call
//     console.log("value of x in fun b again", x); //20
// }

// b();
// var x = 10;

// q8.1
// let x = 1;
// console.log("132 global Before", x); //1
// function outer() {

//     let x = 2;
//     console.log("136 outer Before", x); //2

//     function inner() {
//         console.log("140 Inner Before: ", x); //Error
//         let x = 3;
//         console.log("142 Inner After:", x);//
//     }
//     inner();
//     console.log("145 outer After", x);//
// }
// outer();
// console.log("147 global After", x);//

// q8.1
var x = 1;
console.log("132 global Before", x); //1
function outer() {

    var x = 2;
    console.log("136 outer Before", x); //2

    function inner() {
        console.log("140 Inner Before: ", x); //2
        x = 3;
        console.log("142 Inner After:", x);//3
    }
    inner();
    console.log("145 outer After", x);//3
}
outer();
console.log("147 global After", x);//1


//q10.1 -> H.W
// let name = "global";

// function one() {
//     let name = "function";

//     if (true) {
//         let name = "block";
//         console.log("Inside block:", name);
//     }

//     console.log("Inside function:", name);
// }

// one();
// console.log("Global:", name);


//q10.2 -> H.W
// var name = "global";

// function one() {
//     var name = "function";

//     if (true) {
//         var name = "block";
//         console.log("Inside block:", name);
//     }

//     console.log("Inside function:", name);
// }

// one();
// console.log("Global:", name);
