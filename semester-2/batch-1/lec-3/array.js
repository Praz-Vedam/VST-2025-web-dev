let arr = [1,2,3,4,5,6,7];



// let arr2 = new Array(10,20,30);
// console.log(arr2)


//To get a part of the array
console.log(arr)
let subArr = arr.slice(2,6); //returns a sliced array
console.log(arr)
console.log(subArr);


//Splice;


//Remove elements..
// arr.splice(2,3); //(startingIdx, no.of elem to remove)
console.log("spliced arr",arr);


//Remove and add elements splice(startIdx,noOfElem, elem1,elem2,elem3,... elemN)


//1,2,3,4,5,6,7;
arr.splice(2,0,10,20,30,40); //1,2,10,20,30,40,5,6,7

console.log(arr);

//Can be used to add elements in midst of the array.

