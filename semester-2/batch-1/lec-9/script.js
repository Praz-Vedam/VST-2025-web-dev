// document.querySelector("#grandparent").addEventListener("click",()=> {
//     console.log("Grandparent clicked !");
// },false)//bubbling

// document.querySelector("#parent").addEventListener("click",()=> {
//     console.log("Parent clicked !");
// },true) //capturing

// document.querySelector("#child").addEventListener("click",()=> {
//     console.log("Child clicked !");
// },false)//bubbling

// document.querySelector("#grandparent").addEventListener("click", () => {
//   console.log(" Grandparent CLicked!");
// }, true);
// document.querySelector("#parent").addEventListener("click", () => {
//   console.log(" Parent CLicked!");
// }, false);
// document.querySelector("#child").addEventListener("click", () => {
//   console.log(" Child CLicked!");
// }, false);

document.querySelector("#grandparent").addEventListener(
  "click",
  (e) => {
    console.log(" Grandparent CLicked!");
  },
  false,
);
document.querySelector("#parent").addEventListener(
  "click",
  (event) => {
    console.log(" Parent CLicked!");
          event.stopPropagation();

  },
  false,

);
document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log(" Child CLicked!-1");
    e.stopImmediatePropagation();
  },
  false,
);
document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log(" Child CLicked!-2");
  },
  false,
);
