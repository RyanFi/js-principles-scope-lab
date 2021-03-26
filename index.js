//declare variable customerName with var, set equal to bob
var customerName = 'bob';

//declare variable leastFavoriteCustomer with const, equal whatever
const leastFavoriteCustomer = 'ryan';

//create function that takes the name and uppercases
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

//create function that declares bestCustomer variable in global scope 
function setBestCustomer() {
  bestCustomer = 'not bob';
}

//write new function to overwrite best customer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

//write function that tries to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'paul';
}