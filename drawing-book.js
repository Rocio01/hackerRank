/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n the number of pages in the book
 *  2. INTEGER p  the page number to turn to
 */

function pageCount(n, p) {
  // Write your code here
  let result;
  let arr = [];
  if(p === 2 || p === 3 || (n%2 === 0) && (n-1 === p) && p !== 1){
    result = 1;
  } else if (p === 1 || p === n || ((n%2 !== 0) && (n-1 === p)) ){
    result = 0;
  } else {
    arr.push(Math.trunc(p / 2))
    arr.push(Math.trunc((n-p)/ 2))
    result = Math.min(...arr)
  }
  console.log(result);
return result;
}

pageCount(2,1)
// answer 0
pageCount(6,2)
// aswer 1

pageCount(15,8)
// answer 3

pageCount(6,5)
// answer 1
// 1 23 45 67 89 1011 1213 1415