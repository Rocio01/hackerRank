
/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k item that Anna did not eat.
 *  3. INTEGER b the amount of money that Brian charged Anna for her share of the bill.
 */

// function bonAppetit(bill, k, b) {
//   // Write your code here
//   let sum = 0;
//   let totalBillE = 0
//   for(let i = 0; i < bill.length; i++){
//     sum += bill[i];
//   }
// totalBillE = (sum - bill[k])/2

// if (b === totalBillE){
//   console.log("Bon Appetit")
// } else (
//   console.log(b - totalBillE)
// )
// }


function bonAppetit(bill, k, b) {
  // Write your code here
let sum = bill.reduce((accum, current) => accum + current);
let totalBillE = (sum -bill[k]) / 2;

(b === totalBillE) ? console.log("Bon Appetit") : console.log(b - totalBillE);
}





bonAppetit([3, 10, 2, 9], 1, 12)
// answer 5

bonAppetit([3, 10, 2, 9], 1, 7)
// answer Bon Appetit