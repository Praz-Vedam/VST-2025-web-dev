let str = "   Hello Developers cat dog  "; //0 based indexing.

console.log(str)
console.log(str.length) // length
// 
console.log(str.charAt(9));    //char at given index

console.log(str.charCodeAt(9));   //ASCII code at given index

//Substring

console.log(str.substring(10)); // startIdx only will print until the end.

//start < end
console.log(str.substring(10,12)); //str[10],str[11]

//start > end
console.log(str.substring(12,10)); //str[10],str[11] //behave as str.substring(10,12)

//-ve index. converted to 0 by default.

console.log(str.substring(-100)); // converts to str.substring(0)


//Slice

let sl1 = str.slice(10); 
console.log(sl1); // starting on 10 idx print until the end.


//start < end

let sl2 = str.slice(10,12);
console.log(sl2); //str[10],str[11]


//start > end
let sl3 = str.slice(12,10); //empty string
console.log(sl3); 

//-ve index. -> sliced from the end. Get the string from the last index.

let sl4 = str.slice(-10);
console.log(sl4);



console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.trim());
console.log(str.includes("cat")); // Boolean output & case-sensitive