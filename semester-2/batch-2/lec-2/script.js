//1 Function declaration

// function greet(a){
//     console.log("param: ",arguments[4]);

//     //loop can be used to access all the args

// }

// greet(0,2,3,6,10);

//Rest operator

// const greet = (...args) => {
// console.log(args);
// }

// greet(10,20,30,40,50);
// greet(10,20)

//This keyword

// const x = {
//   name: "Ash Katchem",
//   role: "Js Developer",
//   exp: 30,
//   show: function () {
//     console.log("this ", this); //calling Object
//     setTimeout(() => {
//     console.log("inside the function ", this); //Lexical this
//       console.log("Hello I'm ", this.name);
//     }, 2000);
//   },
// };

// const y = {
//   name: "Brock",
//   role: "Py Developer",
//   exp: 3000,
//   show: function () {
//     console.log("this ", this); //calling Object
//     const that = this;
//     setTimeout(function () {
//       console.log("this inside function ", this); //Window object

//       console.log("Hello I'm ", that.name);//Work around
//     }, 2000);
//   },
// };

// console.log(x.name);
// console.log(x.role);
// x.show();

//Nested functions

let a =10;
console.log(a);//10
function outer() {
  console.log("outer called",a); //10

  function inner() {
    console.log("inner called",a); //10
    let b=20;
  }
  inner();
  {
    {
        console.log(a) //10
        // console.log(b) //Error
    }
  }
}


outer();