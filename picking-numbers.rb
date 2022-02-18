# Given an array of integers, 
# find the longest subarray where the absolute difference between
#  any two elements is less than or equal to 1.
def pickingNumbers(a)
  # Write your code here
  a.sort!
  temp1 = 0
  temp2 = 1
 while temp1 < a.length && temp2 < a.length  do
   if ((a[temp1] - a[temp2]).abs > 1)
      temp1 += 1
      temp2 +=1
   else
    temp2 += 1
  end
 end

  result = (temp1 -temp2).abs
  print(result)
  return result

end

pickingNumbers([4, 6, 5, 3, 3, 1])
#  aswer 3