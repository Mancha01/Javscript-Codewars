# Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

# answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
# answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
# Note that the integers in the lists may be returned in any order.

class Solution(object):
    def findDifference(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[List[int]]
        """
        set1, set2 = set(nums1), set(nums2)
        arr1, arr2 = set(), set()

        for val in set1:
            if val not in set2:
                arr1.add(val)
        
        for val in set2:
            if val not in set1:
                arr2.add(val)
        
        return [list(arr1), list(arr2)]

        