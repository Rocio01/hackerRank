#
# Complete the 'countingValleys' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER steps
#  2. STRING path
#

def countingValleys(steps, path)
  # Write your code here
  arr = path.chars()
  result = 0;
  temp = 0;

  arr.each do |char| 
    if char == "U"
      temp +=1
      if temp == 0
        result += 1
      end
    else
      temp -=1
    end

  end

print(result)
return result
end


countingValleys(8, "UDDDUDUU")
# // answer 1
countingValleys(12, "DDUUDDUDUUUD")

# // answer 2