var sd = require('silly-datetime');
console.log(sd.format(new Date(),'YYYY-MM-DD-HH-mm-ss'));
// var timer = sd.fromNow(new Date());
var timer = sd.locate();
console.log(timer)
