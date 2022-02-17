// Two cats and a mouse are at various positions on a line.
//  You will be given their starting positions. Your task is to determine
//   which cat will reach the mouse first, assuming the mouse does not move and the cats travel 
//   at equal speed. If the cats
//  arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

// Complete the catAndMouse function below.
// x => A
// y => B
// z => C mouse
function catAndMouse(x, y, z) {
let result;

if (Math.abs(z -x) < Math.abs(z -y)){
  result = "Cat A";
} else if (Math.abs(z -x) > Math.abs(z -y)){
  result = "Cat B";
} else {
  result = "Mouse C";
}
return result
}
