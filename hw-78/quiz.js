 
var array = [1,2,4,5,7,8,9];

function double(x){
    "use strict";
    return x * 2;
}
function myMap(array, func){
    "use strict";
    var array2 = [];
    for(var i = 0;i < array.length;i++){
         array2.push(func(array[i]));
    }
    return array2;
}

// var myMap = new Map();
// myMap.set(array,double);
console.log(array.map(double));
console.log("myMap(array,double)",myMap(array,double));
console.log(array);

