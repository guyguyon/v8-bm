
const times = 100000;

var n = times
  , start = new Date;
while (n--) {
	const a = { q:1, w:2, e:3 };
	const b =  Object.assign({}, { w:a.w, e: a.e })
}
console.log('2: %sms', new Date - start);


