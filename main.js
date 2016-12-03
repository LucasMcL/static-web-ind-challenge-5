// Write a Fibonacci number generator that outputs the numbers
// in the series that are less than 500.

fibArray = [1, 1];
console.log(fibArray[0])

while(fibArray[fibArray.length - 1] < 500) {
  var n = fibArray.length;
  var newNum = fibArray[n-1] + fibArray[n-2];
  console.log(fibArray[n-1])
  fibArray.push(newNum);
}
