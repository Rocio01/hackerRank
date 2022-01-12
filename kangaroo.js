// *
// * The function is expected to return a STRING.
// * The function accepts following parameters:
// *  1. INTEGER x1 Kangaroo 1
// *  2. INTEGER v1 jups kangaroo 1
// *  3. INTEGER x2 Kangaroo 2
// *  4. INTEGER v2 jups kangaroo 2

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
 let answer = "NO";
  for(let i = 0; i <= 10000; i++){
   if((x1 += v1) === (x2 += v2)){
     answer = "YES"
     break;
   } 
  }
  console.log(answer)
  return answer
}
kangaroo(0, 2, 5, 3)
kangaroo(0, 3, 4, 2)