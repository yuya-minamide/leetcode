/**
 * URL of this problem
 * https://leetcode.com/problems/all-elements-in-two-binary-search-trees/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
	const Result = [];
	const traverseTree = (root) => {
		if (root !== null) {
			Result.push(root.val);
			traverseTree(root.left);
			traverseTree(root.right);
		}
	};
	traverseTree(root1);
	traverseTree(root2);
	return Result.sort((a, b) => a - b);
};
