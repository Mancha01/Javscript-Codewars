class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freqHash = {}
        result = []
        for num in nums:
            freqHash[num] = 1 + freqHash.get(num, 0)
        
        occurenceBuckets = [[] for _ in range(len(nums) + 1)]

        for key,val in freqHash.items():
            occurenceBuckets[val].append(key)

        for i in range(len(occurenceBuckets) - 1, 0, -1 ):
            for c in occurenceBuckets[i]:
                result.append(c)
                if len(result) == k:
                    return result

        return result
            




            