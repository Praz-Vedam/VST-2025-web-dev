//ternary operator

// let isHungry = false;

// let action = isHungry ? "Eat food" : "work work work";

// console.log(action);

//switch
let day = "Thursday";

switch (day) {
  case "Monday":
    console.log("Start strong 💪");
    break;
  case "Tuesday":
    console.log("Keep going 🚀");
    break;
  case "Friday":
    console.log("Weekend loading 😎");
    break;
  default:
    console.log("Just another day 🌤️");
}

//grading with switch

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
