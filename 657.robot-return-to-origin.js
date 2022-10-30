/**
 * URL of this problem
 * https://leetcode.com/problems/robot-return-to-origin/
 */

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let xAxis = 0;
    let yAxis = 0;
    
    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case"U": 
                yAxis++;
                break;
            case"D": 
                yAxis--;
                break;
            case"L": 
                xAxis++;
                break;   
            case"R":
                xAxis--;
                break;
            default:
                "";
        }
    }
    
    return xAxis === 0 && yAxis === 0;
};