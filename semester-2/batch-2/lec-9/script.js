// document.querySelector("#grandparent").addEventListener("click", ()=> {
//     console.log("Grandparent Clicked!")
// },true) //capturing
// document.querySelector("#parent").addEventListener("click", ()=> {
//     console.log("Parent Clicked!")
// },false) //bubbling
// document.querySelector("#child").addEventListener("click", ()=> {
//     console.log("Child Clicked!")
// },true) //capturing




// document.querySelector("#grandparent").addEventListener("click", () => {
//   console.log(" Grandparent CLicked!");
// }, true);
// document.querySelector("#parent").addEventListener("click", () => {
//   console.log(" Parent CLicked!");
// }, false);
// document.querySelector("#child").addEventListener("click", () => {
//   console.log(" Child CLicked!");
// }, false);



document.querySelector("#grandparent").addEventListener("click", () => {
  console.log(" Grandparent CLicked!");
}, false); //bubbling


document.querySelector("#parent").addEventListener("click", (e) => {
  console.log(" Parent CLicked!-B");
}, false); //bubbling

document.querySelector("#child").addEventListener("click", (e) => {
  console.log(" Child CLicked!");
  e.stopPropagation(); //->2
}, false);