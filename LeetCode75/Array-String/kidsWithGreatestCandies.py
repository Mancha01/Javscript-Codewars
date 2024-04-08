#my solution:
class Solution(object):
    def kidsWithCandies(self, candies, extraCandies):
        """
        :type candies: List[int]
        :type extraCandies: int
        :rtype: List[bool]
        """
        maxCandies = []
        maxVal = max(candies)
        for candy in candies:
            if candy + extraCandies >= maxVal:
                maxCandies.append(True)
            else: maxCandies.append(False)
    
        return maxCandies
        