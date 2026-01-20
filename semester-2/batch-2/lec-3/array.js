let arr = [1,2,3,4,5,6,7];

//Slice -> to get a apart of the array

let subArr = arr.slice(2,6);
console.log(subArr);



//Splice -> delete elements

// arr.splice(2,3); // (startIdx,deleteCount), in original array
console.log(arr);

//Splice delete and add elements
// arr.splice(2,2,10,20,30,40)


arr.splice(3,0,10,20,30,40) //Add elemnts to the midst of the array
console.log(arr);
