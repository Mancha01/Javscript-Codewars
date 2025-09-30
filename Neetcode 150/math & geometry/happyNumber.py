class Solution:
    def isHappy(self, n: int) -> bool:
        def sumOfSquares(number):
            num_string = str(number)
            numsum = 0

            for char in num_string:
                digit_char = int(char)
                numsum += digit_char ** 2
            return numsum

        seen = set()

        while n not in seen:
            seen.add(n)
            n = sumOfSquares(n)
            if n == 1:
                return True
            
            
        
        return False
    

    
