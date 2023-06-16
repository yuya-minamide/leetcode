/**
 * URL of this problem
 * https://leetcode.com/problems/distribute-candies-to-people/
 */

/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
	const Result = [];

	for (let i = 0; i < num_people; i++) {
		Result.push(0);
	}

	let gaveCandies = 1;
	let currentIndex = 0;

	while (candies > 0) {
		Result[currentIndex] += Math.min(candies, gaveCandies);
		candies -= gaveCandies;
		gaveCandies++;
		currentIndex = (currentIndex + 1) % num_people;
	}

	return Result;
};
