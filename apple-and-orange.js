
/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */


// Sample Input 0

// 7 11 Sam house between
// 5 aple 15 orange
// 3 # apples 2 # oranges
// -2 2 1 units distance apples
// 5 -6 units distance oranges
// Sample Output 0

// 1
// 1
// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//   // Write your code here
// let applesArr = [];
// let orangesArr = [];
// let numberApples = 0;
// let numberOranges = 0;
//   for(let i = 0; i < apples.length; i++){
//      applesArr.push( a + apples[i] )
//   }

//   oranges.forEach((orange) => {
//     orangesArr.push(b + orange )
//   })

//   for(let i = 0; i < applesArr.length; i ++){
//     if( applesArr[i] >= s && applesArr[i] <= t){
//       numberApples ++
//     }
//   }
//   orangesArr.forEach((orange)=>{
//     if(orange >= s && orange <= t){
//       numberOranges ++
//     }
//   } )


// console.log(numberApples);
// console.log(numberOranges);
// }

function countApplesAndOranges(s, t, a, b, apples, oranges) {
 console.log(apples.filter(apple => a + apple >= s && a + apple <= t).length);
 console.log(oranges.filter(orange => b + orange >= s && b + orange <= t).length);
}
countApplesAndOranges(7, 11, 5, 15, [-2,2,1], [5, -6]) 

