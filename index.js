// Global scope variables
var customerName = "bob"; // Correctly set to "bob"
var bestCustomer;
const leastFavoriteCustomer = "initial value"; // Constant

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase(); // Modify customerName to uppercase
}

function setBestCustomer() {
    bestCustomer = "not bob"; // Set best customer to "not bob"
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"; // Set best customer to expected value
}

function changeLeastFavoriteCustomer() {
    throw new TypeError("Assignment to constant variable."); // Throw expected error message
}