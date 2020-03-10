/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归方法
 * ！！注意 传入参数是 [] 0情况下，应该返回false。不特殊处理，返回true不对。
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

/**
 * 迭代法
 * 刚开始没想出来，是因为迭代法的node遍历，从上到下进行，思维还是想判断每个node的val加和是sum，此时不知道如何记录当前节点val应该加到哪里，如何加
 * 反过来想，每遇见node，sum扣减就好。
 * @param root
 * @param sum
 * @return {boolean}
 */

var hasPathSum = function(root, sum) {
    if(!root) {return false;}
    let stack = [{node: root, remain: sum}];
    while (stack.length > 0) {
        let data = stack.pop();
        if(!data.node.left && !data.node.right && data.remain === data.node.val) {return true;}
        if(data.node.left) {stack.push({node:data.node.left, remain: data.remain - data.node.val})}
        if(data.node.right) {stack.push({node:data.node.right, remain: data.remain - data.node.val})}
    }
    return false;
};

console.log(hasPathSum({val:1, left:{val:2, left:null, right:null},  right:null}, 1));

/**
 * 数组转化成二叉树结构！
 */
var list2Tree = ()=> {

};