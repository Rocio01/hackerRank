// An avid hiker keeps meticulous records of their hikes.
//  During the last hike that took exactly  steps, for every step it was noted if it was an uphill,
//   , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a 
//    unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step 
// up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, 
// starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of
//  valleys walked through.

function countingValleys(steps, path) {
 let result = 0;
 let temp = 0;
 let arr = path.split("");
//  console.log(arr)
for (let i = 0; i < steps; i++){
  if(arr[i] === "U"){
    temp ++
    if(temp === 0){
      result ++
    }
  } else {
    temp --
  }


}
console.log(result)
return result
}


countingValleys(8, "UDDDUDUU")
// answer 1
countingValleys(12, "DDUUDDUDUUUD")

// answer 2
