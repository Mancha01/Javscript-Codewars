class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashIdx = {}
        for i in range(len(nums)):
            sub = target - nums[i]
            if sub in hashIdx:
                return [i, hashIdx[sub]]
            else:
                hashIdx[nums[i]] = i
        
        
        