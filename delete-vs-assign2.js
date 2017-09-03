
const times = 100000;

var n = times
  , start = new Date;
while (n--) {
	const a = { q:1, w:2, e:3 };
	delete a.q
}
console.log('1: %sms', new Date - start);
