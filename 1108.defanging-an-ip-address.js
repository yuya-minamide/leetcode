/**
 * URL of this problem
 * https://leetcode.com/problems/defanging-an-ip-address/
 */
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let finalIpAddress = ""
    let addressArr = address.split("");
    
    for (let i = 0; i < addressArr.length; i++) {
        if (addressArr[i] === ".") {
            finalIpAddress += "[.]";
        } else finalIpAddress += addressArr[i];
    }
    return finalIpAddress
};