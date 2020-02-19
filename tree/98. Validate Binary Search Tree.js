/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isValidBST = function(root) {
//     if(root === null) {
//         return true;
//     }
//     let node = root;
//     if((node.left && node.left.val >= node.val) || (node.right && node.right.val <= node.val)) {
//         return false;
//     }
//     if(isValidBST(node.left) && isValidBST(node.right)) {
//         return true;
//     }
//     return false;
// };

/**
 * 若上边界有值，根节点值应当小于上边界；
 若下边界有值，根节点值应当大于下边界；
 根节点左儿子不为空时，将当前节点值设置为上边界值，递归调用左儿子；
 根节点右儿子不为空时，将当前节点值设置为下边界值，递归校验右儿子；
 * @param root
 * @param a
 * @param b
 * @return {boolean|*}
 */
const isValidBST = (root, a=-Infinity, b=Infinity) => {
    console.log(root?root.val:null, a, b);
    return  !root ||
        a < root.val && root.val < b &&
        isValidBST(root.left, a, root.val) &&
        isValidBST(root.right, root.val, b);
}

// let root = {val: 10, left:{val:5, left:{val:2, left:null, right:null},right:{val:6, left:null, right:{val:9, left:null, right:null}}}, right:null};
// console.log(isValidBST(root));