// Sample Input 0

// 6
// 1 4 4 4 5 3
// Sample Output 0

// 4

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
  // Write your code here
  arr.sort()
  let temp = 1;
  let count = 1;
  let result;

  for(let i = 0; i < arr.length; i++){
    temp = (arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i])) + 1;
    // console.log(temp)
    if (temp > count){
      count = temp;
      result = arr[i]
      
    }
  }
  console.log(result)
  return result;
}
migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])