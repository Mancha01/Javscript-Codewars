class Solution:
    def isValid(self, s: str) -> bool:
        refHash = {'}': '{', ')': '(', ']':'[' }
        stack = []
        for char in s:
            if char not in refHash:
                stack.append(char)
                continue
            if not stack or stack[-1] != refHash[char]:
                return False
            else:
                stack.pop()
             
        
        return not stack

        