# You are given an integer array nums consisting of n elements, and an integer k.

# Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted

#first:
class Solution(object):
    def findMaxAverage(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: float
        """
        maxi = sum(nums[:k])
        tempMaxi = maxi
        for i in range(k, len(nums)):
            tempMaxi = (tempMaxi - nums[i-k]) + nums[i]
            maxi = max(tempMaxi, maxi)
        return float(maxi)/k

#second:
class Solution(object):
    def findMaxAverage(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: float
        """
        maxi, tempMaxi = 0, 0
        for i in range(k):
            maxi += nums[i]
        tempMaxi = maxi
        for i in range(k, len(nums)):
            tempMaxi = (tempMaxi - nums[i-k]) + nums[i]
            maxi = max(tempMaxi, maxi)
        return float(maxi)/k