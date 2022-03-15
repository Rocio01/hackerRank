// https://www.hackerrank.com/challenges/repeated-string/problem?isFullScreen=true

/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
let lengthS = s.length
const arr = s.split("")
let result = 0 

if(s.includes('a')) {
  
  const sTotal = Math.floor(n / lengthS); 
  let as = arr.filter(n => n === "a").length
  let asTotal = sTotal * as; 
  const remainingChar = n % s.length; 
 

  if(remainingChar !== 0 && s.substr(0,remainingChar).includes('a')) {
      asTotal += s.substr(0,remainingChar).match(/a/g).length;
  }
    
  result = Math.floor(asTotal);
 
  
} 
return result

}

console.log(repeatedString("aba", 10))
// 7
console.log(repeatedString("gfcaaaecbg", 547602))
// 164280
console.log(repeatedString("aab", 882787))
// 588525
console.log(repeatedString("jdiacikk", 899491))
// 112436
console.log(repeatedString("epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq", 549382313570))
// 16481469408
