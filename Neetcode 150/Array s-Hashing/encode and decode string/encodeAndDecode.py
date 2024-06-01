class Solution:

    def encode(self, strs: List[str]) -> str:
        res = ''
        for val in strs:
            res += str(len(val)) + '#' + val
        return res


    def decode(self, s: str) -> List[str]:
        res, i = [], 0
        
        while i < len(s):
            j = i
            while s[j] != '#':
                j += 1
            length = int(s[i:j])
            i = j + 1
            j = i + length
            res.append(s[i:j])
            i = j
        
        return res
