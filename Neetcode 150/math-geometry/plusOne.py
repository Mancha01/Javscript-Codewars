#my first solution
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        single_number = reduce(lambda acc, digit: acc * 10 + digit, digits)
        single_plus_one = single_number + 1
        
        single_plus_str = str(single_plus_one)
        digit_chars = list(single_plus_str)
        digits_list = [int(s) for s in digit_chars]

        return digits_list

        