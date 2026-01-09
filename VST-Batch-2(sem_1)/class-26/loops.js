// for(let i =1; i<=5;i++){
//     console.log("hello",i);
// }

// let i=0;
// while(i<=3){
//     console.log(i);
//     i++;
// }
// console.log("done");

//Question 1

// let rows = 5;

// for (let i = rows; i >= 1; i--) {
//   let str = "";

//   for (let j = 1; j <= i; j++) {
//     str += j;
//   }

//   console.log(str);
// }

//Question 2

let rows = 4;

for (let i = 1; i <= rows; i++) {
  let str = "";

  //spaces
  for (let space = 1; space <= rows - i; space++) {
    str += " ";
  }

  //star
  for (let star = 1; star <= 2 * i - 1; star++) {
    str += "*";
  }

  console.log(str);
}
