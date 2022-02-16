// A person wants to determine the most expensive computer keyboard and USB
//  drive that can be purchased with a give budget. Given price lists for keyboards
//  and USB drives and a budget, find the cost to buy them. If it is not possible to buy
//   both items, return -1.

function getMoneySpent(b, keyboards, drives) {
 let result = -1
 let temp = 0;
 for (let i = 0; i < keyboards.length; i++){
   for(let j = 0; j < drives.length; j++){  
     if(keyboards[i] + drives[j] < b){
       temp = keyboards[i] + drives[j];
       result = temp > result ? temp : -1
     }

   }

 }

console.log(result);
return result
}

getMoneySpent( 5, [4], [5] )
// answer -1

getMoneySpent( 10, [3, 1], [5, 2 , 8] )
// 9