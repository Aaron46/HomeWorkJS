// var Bank = {
//     balance:0 
// }
// var Bank1 = {
//     balance:0 
// }

function createAccount(openingBalance){
    "use strict";
    return{
        balance : openingBalance
    };
}
Bank = createAccount(5);
Bank1 = createAccount(5);

function addInterest(interest) {
    "use strict";
    this.balance += interest
}


addInterest.call(Bank,5);
addInterest.call(Bank1,15);
console.log(Bank,Bank1)