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
 时间复杂度 : O(N)O(N)。每个结点访问一次。
 空间复杂度 : O(N)O(N)。我们跟进了整棵树。
 * @param root
 * @param a
 * @param b
 * @return {boolean|*}
 */
 var isValidBST = (root, a=-Infinity, b=Infinity) => {
    console.log(root?root.val:null, a, b);
    return  !root ||
        a < root.val && root.val < b &&
        isValidBST(root.left, a, root.val) &&
        isValidBST(root.right, root.val, b);
}

// let root = {val: 10, left:{val:5, left:{val:2, left:null, right:null},right:{val:6, left:null, right:{val:9, left:null, right:null}}}, right:null};
// console.log(isValidBST(root));

/**
 * 递归中序遍历
 * 对于二叉搜索树，中序遍历是递增顺序。只要按照遍历顺序判断节点val是否符合大小关系即可。
 * ！！注意：
 * 1. last直接赋值去改变是无法在多层递归中生效的，需要修改里面的值。
 * 2. leetcode不能用全局变量。
 * @param node
 * @param last
 * @return {*}
 */
var dfs = (root, last)=> {
    if(root == null) {
        console.log('0. root == null');
        return true;
    }
    if(!dfs(root.left, last)) {
        return false;
    }
    // console.log('1. root:',root);
    // console.log('2. last:',last);
    if(root.val <= last.val) {
        return false;
    }
    last.val = root.val;
    // console.log('3. last = root',last);
    return dfs(root.right, last);
};

var isValidBST = function(root) {
    var last = {val:-Infinity};
    return dfs(root, last);
};

