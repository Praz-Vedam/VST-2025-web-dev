//for
// for (let i = 1; i <= 5; i++) {
//   console.log("Hello " + i);
// }

//while
// let i = 0;

// while (i <= 3) {
//   console.log("WHile ", i);
//   i++;
// }
// console.log("Done");

//Ques1

// let rows = 5;

// for(let i = rows; i>=1;i--){
// let str = "";

// for( let j = 1;j<=i;j++){
//     str+=j;
// }

// console.log(str);

// }

//Ques 2 pyramid

let rows = 4;

for (let i = 1; i <= rows; i++) {
  let str = "";

  //space
  for (let space = 1; space <= rows - i; space++) {
    str += " ";
  }

  //stars
  for (let stars = 1; stars <= 2 * i - 1; stars++) {

    str+="*";
  }

  console.log(str);
}
