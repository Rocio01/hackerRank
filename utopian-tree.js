// The Utopian Tree goes through 2 cycles of growth every year.
// Each spring, it doubles in height. Each summer, its height increases by 1 meter.
/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function utopianTree(n) {
  // Write your code here
let result = 0;
for(let i = 0; i <= n; i++){
  i % 2 === 0 ? result ++ : result *= 2
}
return result
}
