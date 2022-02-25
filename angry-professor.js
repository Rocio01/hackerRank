// A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline,
//  the professor decides to cancel class if fewer than some number of students are present when class starts. 

/*
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */

function angryProfessor(k, a) {
  // Write your code here
  let result
let arr = a.filter(i => i <= 0)
arr.length >= k ? result = "NO": result = "YES"
console.log(result)
return result
}

angryProfessor(3, [-1, -3, 4, 2])
// YES
angryProfessor(2, [0, -1, 2, 1])
// NO