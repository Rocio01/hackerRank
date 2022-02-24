#
# Complete the 'utopianTree' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER n as parameter.
#

# def utopianTree(n)
#   # Write your code here
#   result = 0
#   for i in 0..n do
#     if(i % 2 === 0)
#       result +=1
#     else 
#       result *= 2
#     end
#   end 
# return result
# end

def utopianTree(n)
  # Write your code here
  result = 0
  for i in 0..n do
    i % 2 == 0 ? result +=1 : result *= 2
  end
  return result
end