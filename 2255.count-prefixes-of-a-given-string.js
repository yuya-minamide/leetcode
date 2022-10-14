/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    
    const changeToArr = s.toString("");
    
    //Answer
    let matchCount = 0;
    
    //Deconstruct string in s array
    const newArrBox = [];
    let i = 0;
    while (i < changeToArr.length) {
        newArrBox.push(changeToArr.slice(0,(i + 1)));
        i++;
    }
    
    //Count matching number
    for (let i = 0; i < newArrBox.length; i++) {
        let j = 0;
        while (j < words.length) {
            if (newArrBox[i] === words[j]) matchCount++;
            j++;
        }
    }
    
    return matchCount;
};