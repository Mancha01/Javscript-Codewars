# Given a string s, reverse only all the vowels in the string and return it.

# The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

#my solution:
import re
class Solution(object):
    def reverseVowels(self, s):
        """
        :type s: str
        :rtype: str
        """
        consonant = r"[^aeiouAEIOU]"
        vowel = r"[aeiouAEIOU]"
        mutable_s = list(s)
        left = 0
        right = len(s) -1
        while left < right:
            if re.match(consonant, mutable_s[left]):
                left += 1
            if re.match(consonant, mutable_s[right]):
                right -= 1
            if re.match(vowel, mutable_s[left]) and re.match(vowel, mutable_s[right]):
                temp = mutable_s[left]
                mutable_s[left] = mutable_s[right]
                mutable_s[right] = temp
                left += 1
                right -= 1
        return ''.join(mutable_s)


#optimized  solution
class Solution(object):
    def reverseVowels(self, s):
        """
        :type s: str
        :rtype: str
        """
        vowels = set("aeiouAEIOU")  # Efficient vowel set for membership checks
        mutable_s = list(s)
        left, right = 0, len(mutable_s) - 1

        while left < right:
            # Skip consonants using efficient vowel set membership
            while left < right and mutable_s[left] not in vowels:
                left += 1
            # Skip consonants using efficient vowel set membership
            while left < right and mutable_s[right] not in vowels:
                right -= 1

            # Swap vowels if both are valid
            if left < right:
                mutable_s[left], mutable_s[right] = mutable_s[right],   mutable_s[left]
                left += 1
                right -= 1

        return ''.join(mutable_s)