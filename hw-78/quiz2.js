
var app = app || {};

app.utils = (function (module) {
    "use strict";

    var count = 0;
    module.addToCount =  function (){
        count += 1;
            };

    module.getCount = function (){
        return count;
            };

    return module;
}(app.utils || {}));

 app.utils.addToCount();
console.log("app.utils.getCount()", app.utils.getCount());

