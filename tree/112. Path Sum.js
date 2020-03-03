/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 注意！！传入参数是 [] 0情况下，应该返回false。不特殊处理，返回true不对。
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(!root) {
        return false;
    }
    return dfs(root, null, sum);
};

let dfs = (node, cursum, sum)=> {
    //累加节点值
    cursum = (cursum===null)?0:cursum;
    cursum += node.val;

    //当前节点是叶子节点
    if(!node.left && !node.right && cursum === sum) {
        return true;
    }
    if(!node.left && !node.right && cursum !== sum) {
        return false;
    }

    //当前不是叶子节点，遍历子节点
    if(node.left && dfs(node.left, cursum, sum)) return true;
    if(node.right && dfs(node.right, cursum, sum)) return true;

    return false;
};

console.log(hasPathSum({val:1, left:{val:2, left:null, right:null},  right:null}, 1));