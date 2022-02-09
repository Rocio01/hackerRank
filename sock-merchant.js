// There is a large pile of socks that must be paired by color. Given an array of 
// integers representing
//  the color of each sock, determine how many pairs of socks wi
//  th matching colors there are.

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
  // Write your code here
  let sorted = ar.sort();
  let result = 0;
  for(let i = 0; i < ar.length; i++){
    if(sorted[i] === sorted[i+1]){
      result++
      i++
    }
  }
console.log(result)
return result;
}


sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]) 