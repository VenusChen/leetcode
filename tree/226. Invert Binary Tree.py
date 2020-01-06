class Solution:
    def invertTree(self, root: TreeNode):
        if root:
            root.left, root.right = root.right, root.left
            self.invertTree(root.left)
            self.invertTree(root.right)
            return root
