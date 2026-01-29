/****************************************************
 * PROMISES PRACTICE WORKSHEET – ANSWER SHEET
 ****************************************************/

let isOpen = true;

function checkRestaurantStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isOpen === true) {
        resolve("Restaurant is Open");
      } else {
        reject("Restaurant is Closed");
      }
    }, 1000);
  });
}

function getMenu() {
  return new Promise((resolve) => {
    resolve(["Burger", "Pizza"]);
  });
}

function placeOrder(menu) {
  return new Promise((resolve) => {
    resolve("Order Placed");
  });
}

function assignDelivery(orderStatus) {
  return new Promise((resolve) => {
    resolve("Delivery Partner Assigned");
  });
}

checkRestaurantStatus()
  .then(status => {
    console.log(status);
    return getMenu();
  })
  .then(menu => {
    console.log("Menu fetched:", menu);
    return placeOrder(menu);
  })
  .then(order => {
    console.log(order);
    return assignDelivery(order);
  })
  .then(delivery => {
    console.log(delivery);
  })
  .catch(error => {
    console.error("Error:", error);
  });

function makePayment(amount) {
  return new Promise((resolve, reject) => {
    if (amount <= 500) {
      resolve("Payment Successful");
    } else {
      reject("Payment Failed");
    }
  });
}

checkRestaurantStatus()
  .then(() => getMenu())
  .then(menu => placeOrder(menu))
  .then(() => makePayment(600))
  .then(payment => assignDelivery(payment))
  .then(result => console.log(result))
  .catch(error => console.error("Error:", error));

checkRestaurantStatus()
  .then(() => getMenu())
  .then(menu => placeOrder(menu))
  .then(() => makePayment(600))
  .catch(error => {
    console.log(error);
    return "Cash on Delivery Selected";
  })
  .then(paymentMethod => assignDelivery(paymentMethod))
  .then(result => console.log(result));

/*
 REFLECTION ANSWERS:

 1. Every .then() must return a value or Promise so the next .then()
    receives the correct resolved value. Without return, undefined is passed.

 2. If return is omitted, the next .then() receives undefined and the
    promise chain breaks logically (though it still continues).

 3. .catch() handles errors because any rejection or thrown error
    propagates down the promise chain until caught.

 4. This approach avoids callback hell by flattening asynchronous logic
    into a readable, linear chain instead of deeply nested callbacks.
*/
