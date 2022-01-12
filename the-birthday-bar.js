/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */
// Sample Input 1

// 6
// 1 1 1 1 1 1
// 3 2
// Sample Output 1

// 0
function birthday(s, d, m) {
  // Write your code here
  let count = 0;
  let sum = 0;
   for(let i = 0; i < s.length; i++){
    for(let j = 0; j < m; j++){
      sum += s[i + j]
    }

    if(sum === d){
      count ++
    }
    sum = 0
   }
   console.log(count)
return count;
}

 birthday([1, 1, 1, 1, 1, 1], 3, 2)
// // 0
 birthday([4], 4, 1)
// // 1

birthday([1, 2, 1, 3, 2], 3,2)
// 2