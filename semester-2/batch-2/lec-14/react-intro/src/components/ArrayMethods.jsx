import React from 'react'

const ArrayMethods = () => {
  //js

  // function inner(){
  //   console.log("Inner")
  // }

  // function outer(innerRef){ //HOF
  //   console.log("Outer")
  //   innerRef();
  // }

  // outer(inner);

  let arr = [10, 12, 15, 17, 20];

  //Array Methods 
let sqArr = [];
for(let i=0;i<arr.length;i++){
  let sqrd = arr[i]*arr[i];
  sqArr.push(sqrd);
}
console.log("Sqaured array", sqArr)

let cubeArr = [];
for(let i=0;i<arr.length;i++){
  let sqrd = arr[i]*arr[i]*arr[i]; //task
  cubeArr.push(sqrd);
}
console.log("Cubed array", cubeArr)

//Generalised way
  function map(arr, cb) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let newVal = cb(arr[i]); //task will be perfomred by cb
      newArr.push(newVal);
    }
    return newArr;
  } //Polyfill of map function

  const doubleVal = (val) => {
    return val*2;
  }
  const tripleVal = (val) => {
    return val*3;
  }

  console.log(map(arr,doubleVal));
  console.log(map(arr,tripleVal));

  return (
    <div>Hi</div>
  )
}

export default ArrayMethods