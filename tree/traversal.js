/**
 * 二叉树前序遍历迭代方法
 * @param root
 * @return {Array}
 */
var preorderTraversal = function(root) {
    if (!root) {
        return []
    }
    let stack = []
    let result = []
    while (root || stack.length > 0) {
        while (root) {
            result.push(root.val)
            stack.push(root)
            root = root.left
        }
        if (stack.length > 0) {
            root = stack.pop()
            root = root.right
        }
    }
    return result
};

