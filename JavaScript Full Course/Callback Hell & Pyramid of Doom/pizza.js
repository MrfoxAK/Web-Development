// Main function that takes a callback (phone number) as an argument
function orderPizza(callback) {
     console.log("Ordering pizza...");

     // Simulate time taken to make the pizza
     setTimeout(function () {
          console.log("Pizza is ready!");

          // Call the callback function (the phone number)
          callback();
     }, 3000); // After 3 seconds, the pizza is ready
}

// Callback function (your phone number)
function callMeWhenPizzaIsReady() {
     console.log("Ring ring! Your pizza is ready for pickup!");
}

// Ordering pizza and passing the callback function
orderPizza(callMeWhenPizzaIsReady);
