// //Function declaration

// // 1) Using arguments

// function greet(a){

//     console.log("Hello", arguments)

// }

// greet(1,2,3,4,"ABC",true, 11);

// function noOfArg(){
//     //
//     console.log(arguments.length)
// }

// noOfArg();

// // 2) Using rest operator

// function findArg(a,b,...arg){
// //Print all arguments
// console.log(a,b,arg)
// }

// findArg(1,2,5,6,7,8,"apple")

// //2.arguments do not work in arrow function
// const fun = () => {
//     console.log("inside fun ");
//     console.log("inside fun :" , arguments);

// }

// fun();

//This keyword

// const x = {
//   name: "Ash Ketcham",
//   role: "Js developer",
//   exp: 30,
//   show: function () {
//     console.log("This inside method", this);
//     // const that = this;

//     setTimeout(() => {
//       console.log("This inside a function", this);
//       console.log("Hi I am ", this.name); //Lexical this
//     }, 2000);
//   },
// };
// const y = {
//   name: "Brock",
//   role: "Py developer",
//   exp: 3000,
//   show: function () {
//     console.log("Hi I am ", this.name);
//   },
// };

// console.log(x.name);
// console.log(x.role);

// x.show();

let a = 10;
console.log(a);
function outer() {
  console.log("outer called");
  console.log(a);

  function inner() {
    console.log("inner called");
    console.log(a);
    let b = 100;
  }
  inner();

  {
    {
    console.log(a);

  }
}

}

outer();
// inner();
console.log(b);
