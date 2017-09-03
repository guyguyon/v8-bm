// 10m
var times = 10000000;

const add = (a, b) => a + b;

var n = times
  , start = new Date;
while (n--) {
  add(1,2);
  add(1.5,2.5);
}
console.log('array: %sms', new Date - start);


var n = times
  , start = new Date;
while (n--) {
  add(1,2);
  add(3,4);
}
console.log('array: %sms', new Date - start);