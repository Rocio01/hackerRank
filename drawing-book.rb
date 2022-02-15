#
# Complete the 'pageCount' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER n
#  2. INTEGER p
#

def pageCount(n, p)
  # Write your code here
  result = 0
  arr = [];
  if p == 1 || p == n || (n%2 != 0 ) && n-1 == p 
    result = 0;
  elsif p == 2 || p == 3 || (n%2 == 0) && n-1 == p && p != 1 
    result = 1;
  else
    arr.push((p/2).to_i);
    arr.push(((n-p)/2).to_i);
    result = arr.min
  end
print(result)
return result
end

pageCount(2,1)
# // answer 0
pageCount(6,2)
# // aswer 1

pageCount(15,8)
# // answer 3

pageCount(6,5)
# // answer 1