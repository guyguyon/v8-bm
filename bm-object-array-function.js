// 10m
var times = 10000000;


var n = times
  , start = new Date;
while (n--) {
  var point = [50,100];
  point[0];
  point[1];
}
console.log('array: %sms', new Date - start);

class Point{
	constructor(x, y) {
		this.x = x;
  		this.y = y;
	}
}

var n = times
  , start = new Date;
while (n--) {
  var point = new Point(50, 100);
  point.x;
  point.y;
}
console.log('Point: %sms', new Date - start);

var n = times
  , start = new Date;
while (n--) {
  var point = { x: 50, y: 100 };
  point.x;
  point.y;
}
console.log('Object: %sms', new Date - start);