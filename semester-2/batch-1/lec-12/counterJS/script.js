const countEle = document.querySelector("#count");
const incBtn = document.querySelector("#increment");
const decBtn = document.querySelector("#decrement");
const resBtn = document.querySelector("#reset");


let count = 0;

incBtn.addEventListener("click",()=> {
    count++;
    countEle.textContent = count;
})

decBtn.addEventListener("click",()=> {
    count--;
    countEle.textContent = count;
})

resBtn.addEventListener("click",()=> {
    count = 0;
    countEle.textContent = count;
})
