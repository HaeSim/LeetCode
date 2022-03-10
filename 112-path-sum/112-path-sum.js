const helper = (curNode, sum, targetSum) => {
    let leftFind = false;
    let rightFind = false;
    sum += curNode.val;
    
    if(curNode.left === null && curNode.right === null) {
        if(sum === targetSum) {
            return true;
        }
        return false;
    }
    if(curNode.left !== null) {
        leftFind = helper(curNode.left, sum, targetSum);   
    }
    if(curNode.right !== null) {
        rightFind = helper(curNode.right, sum, targetSum);
    }
    
    console.log(leftFind, rightFind, leftFind || rightFind);
    return leftFind || rightFind;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(root === null) return false;
    let sum = 0;
    
    return helper(root, sum, targetSum)
};