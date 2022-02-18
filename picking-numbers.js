// Given an array of integers, find the longest subarray
//  where the absolute difference between any two elements is less than or equal to 1.

function pickingNumbers(a) {
  // Write your code here
  let arrSort = a.sort(function(a,b){
    return a-b
  });
  let temp1 = 0;
  let temp2 = 1;
  let result;
  while(temp1 < arrSort.length && temp2 < arrSort.length ){
    if(Math.abs(arrSort[temp1] - arrSort[temp2] ) > 1 ){
      temp1 ++
      temp2 ++
    }else {
      temp2 ++
    }
  }

  // console.log(temp1)
  // console.log(temp2)
   console.log(arrSort)
  result = Math.abs(temp1 - temp2 )
  console.log(result)
  return result
}



pickingNumbers([4, 6, 5, 3, 3, 1])
// aswer 3