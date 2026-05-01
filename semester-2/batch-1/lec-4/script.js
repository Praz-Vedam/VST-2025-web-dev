console.log("Asynchronous Programming");

// --------------------synchronous code---------------

// console.log("Before");

// function fun(){
//     console.log("I am Fun");
// }
// fun();

// console.log("After");

// --------------------Asynchronous code---------------

// console.log("Before");

// function fun(){
//     console.log("I am Fun");
// }

// setTimeout(fun,20);//delegated to browser through Web APIs

// console.log("After");
// console.log("After");
// console.log("After");
// console.log("After");
// console.log("After");
// console.log("After");
// console.log("After");
//GEC will be released and JS CallStack is free.

//------------------------------async----------------
// console.log("Before");

// let flag = true;

// function fun() {
//   //2sec
//   console.log("loop break");
//   flag = false;
// }

// setTimeout(fun, 2000); // runs somewhere

// console.log("After");
// console.log("next");

// while (flag) {} // Infinite loop

//------quiz 1
// console.log("Before"); //1
// const fun2 = () => {
//   console.log("Set timeout 1");//3 -> 1sec
//   let timeInFuture = Date.now() + 7000;

//   while (Date.now() < timeInFuture) {}
//   console.log("after while"); //4 ->8th second
// };
// const fun1 = () => console.log("hello");  //5 - 8th second

// setTimeout(fun1, 2000);
// setTimeout(fun2, 1000);

// console.log("After"); //2

//----------------------quiz2----------------------
// console.log("Start"); //1 t=0
// setTimeout(() => {
//   console.log("First Timeout (1s)"); //6 t=1

//   setTimeout(() => {
//     console.log("Inner Timeout (0.5s)"); //7 t=1.5
//   }, 500);
// }, 1000);

// setTimeout(() => {
//   console.log("Second Timeout (0s)"); //4 t=0
// }, 0);

// function runTask() {
//   console.log("Inside runTask"); //2 t=0

//   setTimeout(() => {
//     console.log("Timeout inside runTask (300ms)"); //5 t=0.3
//   }, 300);

//   function innerTask() {
//     console.log("Inside innerTask"); //3 t=0
//   }

//   innerTask();
// }
// runTask();


// ------setInterval------
// let i = 0;
// let id = setInterval(() => {
//   console.log("I am inside interval ", ++i);
//   if(i==3){
//     clearInterval(id)
//   }
// }, 1000);
