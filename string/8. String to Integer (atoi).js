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
 * Tips
 * 1. charAt 与 str[i]基本一样，但是对于空字符串，charAt返回'',str[i]返回undefined
 * 2. charCodeAt返回字符的ASCII码，对于数字，需要码-48==数字
 * 3. 记得考虑溢出
 * 4. 注意返回值正负
 * 5. 需要记录正负号个数。如果多个符号相接，需要返回0
 * 6. '+0 123' 中间夹杂空格，说明代码需要两段循环，否则不好判断字符串中间夹杂的空格
 */
var myAtoi = function(str) {
    let res = 0;
    let positive = true;
    let cnt = 0; //记录符号个数
    let i = 0;
    while (str.charAt(i) === ' ') {
        i++;
    }
    //判断正负和数值提取要拆开，否则，0-1这种，数字符号混合的判断不正确
    if(str.charAt(i) === '-' ) {
        positive = false;
    }
    if(str.charAt(i) === '-'  || str.charAt(i) === '+') {
        i++;
    }
    //这里for i用旧值，不能再次赋值i=0
    for(; i < str.length; i++) {
        if(str.charCodeAt(i)-48>9 || str.charCodeAt(i)-48<0) {
            break;
        }
        //要注意判断，当前值是否即将溢出
        if(res*10+(str.charCodeAt(i)-48)>=2147483647 && positive) {
            res = 2147483647;
        }
        else if(res*10+(str.charCodeAt(i)-48)>=2147483648 && !positive) {
            res = 2147483648;
        }
        else {
            res = res*10+str.charCodeAt(i)-48;
        }
    }

    return positive?res:0-res;
};

console.log(myAtoi('42'));
console.log(myAtoi('  -42'));
console.log(myAtoi('4193 with words'));
console.log(myAtoi('words and 987'));
console.log(myAtoi('-91283472332'));
console.log(myAtoi('-+10'));
console.log(myAtoi('+0 123'));
console.log(myAtoi("2147483648"));
console.log(myAtoi("0-1"));
