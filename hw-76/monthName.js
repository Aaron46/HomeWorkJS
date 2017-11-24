var monthName = (function () {
    'use strict';

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];

    return {
        getMonthName: function (num) {
            return months[num -1];
        },
        getMonthNumber: function (name) {
            for (var i = 0; i < months.length; i++) {
                if (months[i] === name) {
                    return i + 1;
                }
            }
            return "NO SUCH DAY!";
        }
    };
}());
console.log("monthName.getMonthName(6)", monthName.getMonthName(6));
console.log('monthName.getMonthNumber("June")', monthName.getMonthNumber("June"));
window;