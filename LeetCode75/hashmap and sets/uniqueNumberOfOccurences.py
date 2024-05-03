class Solution(object):
    def uniqueOccurrences(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """
        valsCount = {}
        for val in arr:
            valsCount[val] = 1 + valsCount.get(val, 0)
        
        valuesList = list(valsCount.values())

        return len(valuesList) == len(set(valuesList))


        