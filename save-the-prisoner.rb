# Submissions	Leaderboard	Discussions	Editorial
# A jail has a number of prisoners and a number of treats to pass out to them. Their jailer decides the fairest way 
# to divide the treats is to seat the prisoners around a circular
#  table in sequentially numbered chairs. A chair number will be drawn from a hat. Beginning with
#   the prisoner in that chair, one candy will be handed to each prisoner sequentially around the table
#    until all have been distributed.

# The jailer is playing a little joke, though. The last piece 
# of candy looks like all the others, but it tastes awful. Determine the chair
#  number occupied by the prisoner who will receive that candy.
# // int n: the number of prisoners
# // int m: the number of sweets
# // int s: the chair number to begin passing out sweets from
def saveThePrisoner(n, m, s)
  # Write your code here
  result = n

  
  if (( m % n + s ) - 1 ) % n != 0
    result = (( m % n + s ) - 1 ) % n
  else
    result
  end
  result

end
print(saveThePrisoner(3,7, 3))
#  3