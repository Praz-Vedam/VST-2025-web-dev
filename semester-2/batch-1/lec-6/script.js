// const cart = ["shirt", "trousers", "shoes", "shades"];

// const promise = createOrder(cart); // An async function -- will get orderId

// //Print PROMISE
// console.log(promise);

// //Consume
// promise.then(function (orderId) {
//     console.log("inside then", promise);
//   //This runs when Promise is resolved
//   console.log(orderId);
// }).catch(function(err){
//     console.log(err.message)
//     alert("error",err.message)
// })

// //Creation of promise/ backend side / producer side

// function createOrder(cart) {

// function validateCart() {
//   return false;
// }

//   const pr = new Promise(function (resolve, reject) {
//     //createOrder
//     //validate the cart (check in stock)
//     //return orderId

//     //Fail-first approach
//     if (!validateCart(cart)) {
//       setTimeout(function () {
//         // mimicking async BE jobs.
//         const err = new Error("Cart is invalid");
//         reject(err);
//       }, 2000);
//     }

//     // logic for createOrder

//     const orderId = "11010";

//     if (orderId) {
//       setTimeout(function () {
//         // mimicking BE jobs.
//         resolve(orderId);
//       }, 5000);
//     }
//   });

//   return pr;
// }

//======================= Promise chaining=======================
const cart = ["shirt", "trousers", "shoes", "shades"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  }).then((paymentInfo)=> {
        console.log(paymentInfo)
    })
  .catch(function (err) {
    console.log(err.message);
  }).then(function(){
    console.log("I will be definitely called !!")
  });

// Creation / Backend side /Promises are produced
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //createOrder
    //validateCart
    //return orderId

    //Fail-first approach
    if (!validateCart(cart)) {
      const err = new Error("Cart is invalid");
      reject(err);
    }

    // logic for createOrder

    const orderId = "11011";
    if (orderId) {
      setTimeout(() => resolve(orderId), 4000);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}

function validateCart(cart) {
  return false;
}
