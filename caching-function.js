// 10m
var times = 10000000;

const add = (a, b) => a + b;

const addI = (a, b) => a + b;
const addF = (a, b) => a + b;



var n = times
  , start = new Date;
while (n--) {
  add(3.5, 4.5);
  add(5.5, 6.5);
}
console.log('float: %sms', new Date - start);

var n = times
  , start = new Date;
while (n--) {
  add(1, 2);
  add(3, 4);
}
console.log('integer: %sms', new Date - start);


var n = times
  , start = new Date;
while (n--) {
  addI(1, 2);
  addF(1.5, 2.5);
}
console.log('separate: %sms', new Date - start);


var n = times
  , start = new Date;
while (n--) {
  add(1, 2);
  add(1.5, 2.5);
}
console.log('mixed: %sms', new Date - start);