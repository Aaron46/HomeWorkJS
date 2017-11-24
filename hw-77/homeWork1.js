var myApp = myApp || {};

myApp.Utils = (function(Utils){
    "use strict";
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
        Utils.getMonthName = function (num) {
            return months[num -1];
        };
        Utils.getMonthNumber =  function (name) {
            for (var i = 0; i < months.length; i++) {
                if (months[i] === name) {
                    return i + 1;
                }
            }
            return "NO SUCH DAY!";
        };
        Utils.stringCaseInsensitiveEquals = function(){};
        return Utils
    }(myApp.Utils || {}));

console.log(myApp.Utils.getMonthName(2));
console.log(myApp.Utils.getMonthNumber('September'));