
// Addition is one of the four elementary,
    // mathematical operation of arithmetic with the other being subtraction,
    // multiplication and division. The addition of two whole numbers is the total
    // amount of those quantitiy combined. For example in the picture on the right,
    // there is a combination of three apples and two apples together making a total
    // of 5 apples. This observation is equivalent to the mathematical expression
    // "3 + 2 = 5"
    // Besides counting fruit, addition can also represent combining other physical object.
function add2(x, y) {
    
    return(x + y);
}

// 10m
var times = 10000000;

function loop(cb) {
    var n = times
        , start = new Date;
    for(let i = 0; i < times; i++) {
        if (cb(i, i++) < 5) {
        //
        }
    }
    console.log('cb: %sms', new Date - start);
} 

loop(add2);
