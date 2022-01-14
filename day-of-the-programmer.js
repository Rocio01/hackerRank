// Sample Input 0

// 2017
// Sample Output 0

// 13.09.2017

// Sample Input 1

// 2016
// Sample Output 1

// 12.09.2016
// Explanation 1

/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
  // Write your code here
  let result;
  if (year < 1918) {
    if (year%4 === 0){
      result = `12.09.${year}`
    } else if (year%4 !== 0){
      result = `13.09.${year}`
    }
  }
   else if (year === 1918){
    result = `26.09.${year}`
  } else {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
      result = `12.09.${year}`
    }else{
      result = `13.09.${year}`
    }
  }
  console.log(result)
  return result
}

dayOfProgrammer(2017)
dayOfProgrammer(1800)
dayOfProgrammer(1918)