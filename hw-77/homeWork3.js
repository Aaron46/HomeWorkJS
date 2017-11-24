var myApp = myApp || {};

myApp.Utils = (function(Utils){
    "use strict";
        Utils.stringCaseInsensitiveEquals = function(a,b){
            return a.toUpperCase() === b.toUpperCase();
        };
        return Utils
    }(myApp.Utils || {}));

console.log(myApp.Utils.stringCaseInsensitiveEquals('donald','Donald'));
console.log(myApp.Utils.stringCaseInsensitiveEquals('September','September'));