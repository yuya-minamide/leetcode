/**
 * URL of this problem
 * https://leetcode.com/problems/check-if-the-sentence-is-pangram/
 */

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    let counter = 0;
    
    if (sentence.length < alphabet.length) {
        return false;
    }
    
    for (let i = 0; i < sentence.length; i++) {
        if (sentence.includes(alphabet[i])) {
            counter++;
        }
    }
    
    return counter === alphabet.length;
};
