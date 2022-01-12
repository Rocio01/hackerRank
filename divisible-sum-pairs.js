/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

// Sample Input

// STDIN           Function
// -----           --------
// 6 3             n = 6, k = 3
// 1 3 2 6 1 2     ar = [1, 3, 2, 6, 1, 2]
// Sample Output

//  5

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let count = 0;
  for(let i = 0; i < ar.length; i++){
    for(let j = i+1; j < ar.length; j++){
      if(( (ar[i] + ar[j])% k)=== 0){
        count ++
      }
   }   
  }
return count
}

divisibleSumPairs(6,3, [1, 3, 2, 6, 1, 2])
//  5