// 10m
const TIMES = 1000;
const PROPERTIES = 10000;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


const matrix = [];
for (let i=0; i < TIMES; i++) {
  matrix[i] = Array(PROPERTIES);
  for (let j=0; j < PROPERTIES; j++) {
    matrix[i][j] = j;
  }
  shuffle(matrix[i]);
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
console.log('random order: %sms', new Date - start); // ~ 3650 MS
