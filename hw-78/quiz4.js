var app = app || {};



var a = app.utils.createCounter();
a.addToCount();
a.addToCount();
a.addToCount();
a.addToCount();
a.addToCount();
a.addToCount();
a.addToCount();
a.addToCount();
a.addToCount();
a.addToCount();
a.addToCount();
a.addToCount();
a.addToCount();
a.addToCount();
a.addToCount();
a.addToCount();
var b = app.utils.createCounter();
b.addToCount();
b.addToCount();
b.addToCount();
b.addToCount();
b.addToCount();

app.utils.addToCount();
app.utils.addToCount();
app.utils.addToCount();
app.utils.addToCount();
app.utils.addToCount();
app.utils.addToCount();
app.utils.addToCount();
console.log("b.getCount()", b.getCount());
console.log("a.getCount()", a.getCount());
console.log("app.utils.getCount()", app.utils.getCount());