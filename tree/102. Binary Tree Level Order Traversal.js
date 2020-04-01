/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 迭代法。
 * 两层遍历。
 * 第一层遍历，遍历每一层
 * 第二层遍历，遍历每一层中每个元素的子节点
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    if(!root) {                     //Tip：因为已经下方判断过left right是否存在，node不存在只可能是root是null
        return [];
    }
    let queue = [root];
    while (queue.length > 0) {
        let levelnum = queue.length;
        let level = [];
        while (levelnum) {            //Tip: levelnum是区分整个queue中哪些是当前层节点关键
            let node = queue.shift();
            level.push(node.val);
            if(node.left) {
                queue.push(node.left);//Tip： push结果，和push下一层节点，是完全不同位置。
            }
            if(node.right) {
                queue.push(node.right);
            }
            levelnum--;
        }
        res.push(level);
    }
    return res;
};
