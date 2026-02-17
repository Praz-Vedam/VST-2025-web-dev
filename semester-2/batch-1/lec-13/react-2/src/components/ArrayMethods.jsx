import React from 'react'

const ArrayMethods = () => {
    
    // 1. Callbacks;

    // function inner() {
    //     console.log("I'm inner");
    // }

    // function outer(innerRef) {
    //     console.log("I'm outer");
    //     innerRef();
    // }

    // outer(inner);

    //outer is a HOF(higher order function.
    //inner is the callback function in line 16.

//2.Array methods

let arr = [10,20,12,17,24];

//square elements

let sqrArr = [];

  for (let i = 0; i < arr.length; i++) {
    let sqVal = arr[i] * arr[i];
    sqrArr.push(sqVal);
  }
//   console.log("square Array", sqrArr);



  let cubeArr = [];
  for (let i = 0; i < arr.length; i++) {
    let cubeVal = arr[i] * arr[i] * arr[i];
    cubeArr.push(cubeVal);
  }
//   console.log("cube Array", cubeArr);

  //3. more generalised method-> where cb performs the given task
  function map(arr, cb) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let newVal = cb(arr[i]);
      newArr.push(newVal);
    }
    return newArr;
  }
    const doubleNum = (val) => {
    return 2*val;
  }

  const cube = (val) => {
    return val*val*val
  }
 const sq = (val) => {
    return val*val
  }

  console.log("Generalised map func", map(arr,doubleNum));
  console.log("Generalised map func cube", map(arr,cube));
  console.log("Generalised map func square", map(arr,sq));


  //4. inbuilt map function (as an Array method)

  function triple(ele) {
    return 3 * ele;
  }

  const tripleArr = arr.map(triple);
  console.log("triple through map", tripleArr);


  //5. filter 

//   const isEven = (num) => {
//     return num%2==0;
//   }

  const filteredArr = arr.filter((num)=> {
        return num%2==0;
  });

  console.log(filteredArr)


  return (

    <>
    {/* React Fragments  <>...</>     */}
    <h1>Array Methods</h1>
    <h1></h1>
    </>
  )
}

export default ArrayMethods