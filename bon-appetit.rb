#
# Complete the 'bonAppetit' function below.
#
# The function accepts following parameters:
#  1. INTEGER_ARRAY bill
#  2. INTEGER k
#  3. INTEGER b
#

def bonAppetit(bill, k, b)
  # Write your code here
  sum = 0;
  
bill.each { |n|  sum += n}
total_bill_e = (sum - bill[k])/2
(total_bill_e == b) ? puts("Bon Appetit"): puts(b - total_bill_e)

end


bonAppetit([3, 10, 2, 9], 1, 12)
# answer 5

bonAppetit([3, 10, 2, 9], 1, 7)
# answer Bon Appetit