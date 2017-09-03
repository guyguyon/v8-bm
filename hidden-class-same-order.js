// 10m
const TIMES = 1000;
const PROPERTIES = 10000;

const matrix = [];
for (let i=0; i < TIMES; i++) {
  matrix[i] = Array(PROPERTIES);
  for (let j=0; j < PROPERTIES; j++) {
    matrix[i][j] = j;
  }  
}


const p1 = {};
for (let i=0; i < PROPERTIES; i++) {
  p1["i" + i] = i;
}


let n = TIMES
  , start = new Date;
while (n--) {
  const p2 = {}
  for (let i=0; i < PROPERTIES; i++) {
    p2["i" + matrix[n][i]] = i;
  }
}
console.log('same order: %sms', new Date - start); // ~ 3200 MS
