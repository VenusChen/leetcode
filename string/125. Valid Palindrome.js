/**
 * 双指针法
 * 两个指针两边向中间夹逼，同时比对。
 * 注意：
 * 1. j--不是j++。
 * 2. 大小写要转换后比对。
 * 3. 最后循环后记得返回true。
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(!s) {
        return true;
    }
    let i = 0;
    let j = s.length-1;

    while(j >= i) {
        if(s.charCodeAt(i) < 48 || (s.charCodeAt(i) > 57 && s.charCodeAt(i) < 65) || (s.charCodeAt(i) > 90 && s.charCodeAt(i) < 97) || s.charCodeAt(i) > 122) {
            i++;
        }
        else if(s.charCodeAt(j) < 48 || (s.charCodeAt(j) > 57 && s.charCodeAt(j) < 65) || (s.charCodeAt(j) > 90 && s.charCodeAt(j) < 97) || s.charCodeAt(j) > 122) {
            j--;
        }
        else if(s[i].toLowerCase() === s[j].toLowerCase()) {
            i++;
            j--;
        }
        else if(s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));