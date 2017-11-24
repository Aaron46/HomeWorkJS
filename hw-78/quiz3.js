var app = app || {};

app.utils = (function (module) {
    "use strict";
    var counters = 0;
    module.createCounter = function(){
        counters++;
        var count = 0;
        return{
            addToCount:function (){
                count++;
                    },
            getCount:function (){
                return count;
                    },    
            getCounter:function (){
                    return counters;
                    }    
        }
    }
   
    return module;
}(app.utils || {}));
