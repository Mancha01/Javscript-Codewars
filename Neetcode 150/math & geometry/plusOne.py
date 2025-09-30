class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        single = int("".join(map(str, digits)))
        single += 1
        arr_digits = [int(digit) for digit in str(single)]
        
        return arr_digits