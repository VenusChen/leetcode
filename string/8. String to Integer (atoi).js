/**
 * Implement atoi which converts a string to an integer.
 The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.
 The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.
 If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.
 If no valid conversion could be performed, a zero value is returned.

 Only the space character ' ' is considered as whitespace character.
 Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
 */

/**
 * @param {string} str
 * @return {number}
 * charAt 与 str[i]基本一样，但是对于空字符串，charAt返回'',str[i]返回undefined
 * charCodeAt返回字符的ASCII码，对于数字，需要码-48==数字
 */
var myAtoi = function(str) {
    let i = 0;
    let negative = false;
    let res = [];
    //1. 过滤掉字符串前端的空格
    while (str[i]===' '){
        i++;
    }
    //2. 当前i位置是第一个非空格字符，如果不是数字，返回
    if((str.charCodeAt(i)>9 || str.charCodeAt(i)<0) && str[i] !== '-') {
        return 0;
    }
    //3. 首个字符如果是正负号，标记
    if(str[i] === '-') {
        negative = true;
        i++;
    }
    //4. 选取连续数字,遇到非数字退出
    while ((str.charCodeAt(i)>=0 && str.charCodeAt(i)<=9)) {
        res.push(str.charCodeAt(i)-48);
    }
};

// console.log(myAtoi());
console.log('1'.charCodeAt(0));
console.log(' '.charCodeAt(0));