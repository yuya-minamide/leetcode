/**
 * URL of this problem
 * https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
 */

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maximumNum = 0;
    for (let i = 0; i < sentences.length; i++) {
        let wordNum = 0;
        wordNum = sentences[i].split(" ").length;
        if (maximumNum < wordNum) {
            maximumNum = wordNum;
        }
    }
    return maximumNum;
};