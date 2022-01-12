/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */
// Sample Input 1

// 10
// 3 4 21 36 10 28 35 5 24 42
// Sample Output 1

// 4 0

function breakingRecords(scores) {
  // Write your code here
  let best = 0;
  let worst = 0;
  let result = [];
  let temp = scores[0];
  let temp1 = scores[0];
  for(let i = 0; i < scores.length; i++){
  
    if(scores[i+ 1] > scores[i] && scores[i+ 1] > temp){
      temp = scores[i+ 1]
      best ++; 
    }     
    if (scores[i+ 1] < scores[i] && temp1 > scores[i+1] ){ 
      temp1 = scores[i+1];
      worst ++

    }
   
  }
  result.push(best, worst)     
  console.log(result)
  return(result)
}

 breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]) 
// // [4,0]
 breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])
// // [2,4]
breakingRecords([17,45, 41, 60, 17, 41, 76, 43, 51, 40, 89, 92, 34, 6, 64, 7, 37, 81, 32, 50])
// [5,1]

breakingRecords([100000, 9, 3, 10, 2, 20])
// [0, 3]