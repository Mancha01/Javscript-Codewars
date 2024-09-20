# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        #check base case scenarions:
        if not p and not q:
            return True
        if not p or not q or p.val != q.val:
            return False
        
        #check the above conditions on both trees:
        return (self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right))
