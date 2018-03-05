function abs(x) {
//   if(x < 0) {
//     return -x;
//   }else {
//     return x;
//   }


  return (x < 0)? -x : x;
}

function test_abs() {
  console.log("abs of -5 is: " + abs(-5) );
  console.log("abs of 7 is: " + abs(7) );
  console.log("abs of 0 is: " + abs(0) );
  console.log("abs of -4762343 is: " + abs(-4762343));
  console.log("abs of -3.1415 is: " + abs(-3.1415));
}

// test_abs();


function max(x, y) {
//   if(x > y){
//     return x;
//   }else{
//     return y;
//   }
// }

  return  (x > 0)? x:y;
}






function testMax() {
  console.log("max of 3 and 6: " + max(3,6));
  console.log("max of -3 and -6: " + max(-3,-6));
  console.log("max of 6 and 6: " + max(6,6));
}

function min(x, y) {
  if(x < y){
    return x;
  }else{
    return y;
  }
}

// testMax();

function testMin() {
  console.log("min of 3 and 6: " + min(3,6));
  console.log("min of -3 and -6: " + min(-3,-6));
  console.log("min of 6 and 6: " + min(6,6));
}

// testMin();


function posOrNeg(x) {
  if(x < 0) {
    console.log(x + " is negative");
  } else if(x > 0) {
    console.log(x + " is postive");
  }else{
    console.log(x + " is neither positve or negative");
  }
}



function test_posOrNeg(){
  posOrNeg(-342);
  posOrNeg(467);
  posOrNeg(0);
}

// test_posOrNeg();


// SWITCH STATEMENT//////
function monthName(month) {
  switch (month) {
    case  1: return "January";
    case  2: return "February";
    case  3: return "March";
    case  4: return "April";
    case  5: return "May";
    case  6: return "June";
    case  7: return "July";
    case  8: return "August";
    case  9: return "September";
    case 10: return "October";
    case 11: return "November";
    case 12: return "December";
    default: return undefined;
  }
}

// console.log(monthName(-1));
// console.log(monthName(1));
// console.log(monthName(2));
// console.log(monthName(3));
// console.log(monthName(4));
// console.log(monthName(5));
// console.log(monthName(6));
// console.log(monthName(7));
// console.log(monthName(8));
// console.log(monthName(9));
// console.log(monthName(10));
// console.log(monthName(11));
// console.log(monthName(12));
// console.log(monthName(13));

// monthName();


function largestFactor(n) {
  let factor = n - 1;
  while(n % factor !== 0){
    factor--;
  }
  return factor;
}

function alignRIght(value, width) {
  let str = "" + value;
  while(str.length < width) {
    str = " " + str;
  }
}

function printTheNumbers(){
  for(let i = 0; i < 27; i+=3){
    console.log(i);
  }
}

// printTheNumbers();


function factorial(n){
  let result = 1;
  for(let i = 1; i <= n; i++){
    result = result * i;
  }
  return result;
}



factorial(68);
