//selectors

const counterEl = document.querySelector("#count");
const decrement = document.querySelector("#decrement");
const increment = document.querySelector("#increment");
const reset = document.querySelector("#reset");

let count = 0;

//Listeners.

decrement.addEventListener("click", () => {
  count--;
  counterEl.textContent = count;
});

increment.addEventListener("click", () => {
  count++;
  counterEl.textContent = count;
});
reset.addEventListener("click", () => {
  count = 0;
  counterEl.textContent = count;
});
