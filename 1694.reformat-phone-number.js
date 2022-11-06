/**
 * URL of this problem
 * https://leetcode.com/problems/reformat-phone-number/
 */

/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    
    //Remove hyphens and spaces
    let integerArr = number.split("").filter((a) => a !== "-" && a !== " ");
    let arr = [];
    
    while (integerArr.length > 4) {
        arr.push(integerArr.splice(0, 3));
    }
    
    if (integerArr.length === 4) {
        arr.push(integerArr.splice(0, 2));
        arr.push(integerArr);
    } else {
        arr.push(integerArr);
    }
    
    //Add a hyphen to a number, then turn it into a string
    return arr.join("-").split(",").join("");   
};