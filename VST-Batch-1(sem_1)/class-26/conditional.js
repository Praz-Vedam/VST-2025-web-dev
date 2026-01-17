//Ternary

// let isHungry = true;

// let action = isHungry ? "Eat a pizza" : "Work work work";

// console.log(action);

//switch
let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start strong 💪");
    break;
  case "Thursday":
    console.log("Keep going 🚀");
    break;
  case "Friday":
    console.log("Weekend loading 😎");
    break;
  default:
    console.log("Just another day 🌤️");
}

//grading system using switch

let marks = 81;
let grade;

//switch
switch (true) {
  case marks >= 90:
    grade = "A";
    break;

  case marks >= 80:
    grade = "B";
    break;

  case marks >= 70:
    grade = "C";
    break;

  case marks >= 60:
    grade = "D";
    break;

  default:
    grade = "F";
}

console.log(grade);
