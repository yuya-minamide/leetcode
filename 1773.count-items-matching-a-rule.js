/**
 * URL of this problem
 * https://leetcode.com/problems/count-items-matching-a-rule/
 */

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let matchingCounte = 0;
    for (let i = 0; i < items.length; i++) {
        if (ruleKey == "type") {
            if (ruleValue == items[i][0]) {
                matchingCounte++;
            }
        } else if (ruleKey == "color") {
            if (ruleValue == items[i][1]) {
                matchingCounte++;
            }
        } else {
            if (ruleValue == items[i][2]) {
                matchingCounte++;
            }
        }
    }
    return matchingCounte; 
};

