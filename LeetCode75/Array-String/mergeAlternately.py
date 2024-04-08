class Solution(object):
    def mergeAlternately(self, word1, word2):
        """
        :type word1: str
        :type word2: str
        :rtype: str
        """
        merged = []
        idx1,idx2 = 0,0 

        while idx1 < len(word1) and idx2 < len(word2):
            merged.append(word1[idx1])
            merged.append(word2[idx2])
            idx1 += 1
            idx2 += 1

        merged.append(word1[idx1:])
        merged.append(word2[idx2:])
        return "".join(merged)