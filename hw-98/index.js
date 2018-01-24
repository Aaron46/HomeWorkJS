// /* $ global */
// (function () {
const $ = require('jQuery');
const moment = require('moment');

var color = $("#color");
color.css("height", '100px');
color.css("backgroundColor", "red");
const datePicker = document.getElementById('selectedDate'),
    result = document.getElementById('result');

datePicker.addEventListener('change', () => {
    result.innerHTML = moment(datePicker.value).fromNow();
});
// }());