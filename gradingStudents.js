function gradingStudents(grades) {
  // Write your code here
  let newGrades = [];
  grades.forEach((grade) => {
   if(grade < 38 || ( grade % 5 < 3) ){
     newGrades.push(grade)

   }else if ( grade % 5 >= 3){
    newGrades.push(grade + (5 - (grade % 5)))
   }
  })
  console.log(newGrades)
  return newGrades;

}

gradingStudents([
  73,
  67,
  38,
  33])