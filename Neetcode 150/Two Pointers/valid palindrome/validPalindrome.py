#my solution:
class Solution:
    def isPalindrome(self, s: str) -> bool:
       
        filteredString = ''.join([char.lower() for char in s if char.isalnum()])
        left = 0;
        right = len(filteredString) - 1
        
        while left < right:
            if filteredString[left] == filteredString[right]:
                left += 1
                right -= 1
            if filteredString[left] != filteredString[right]:
                return False
        
        return True

#neetcode solution which uses constant memory and  where we create our own alphanum function which uses ascii properties of alphanumeric characters to check
class Solution:
    def isPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1

        while l < r:
            while l < r and not self.alphaNum(s[l]):
                l += 1
            while r > l and not self.alphaNum(s[r]):
                r -= 1
            if s[l].lower() != s[r].lower():
                return False
            l, r = l + 1, r - 1
        return True
    
    def alphaNum(self, c):
        return (ord('A') <= ord(c) <= ord('Z') or 
                ord('a') <= ord(c) <= ord('z') or 
                ord('0') <= ord(c) <= ord('9'))
    

    #neetcode solution where we use a syntax for reversing string:
    class Solution:
        def isPalindrome(self, s: str) -> bool:
            parsedString = ''

            for char in s:
                if char.isalnum():
                    parsedString += char.lower()
        
            return parsedString == parsedString[::-1]
        

        