/**
 * Desc:
 * Given an input string, reverse the string word by word.
 *
 * Input: "the sky is blue"
 * Output: "blue is sky the"
 *
 * Input: "  hello world!  "
 * Output: "world! hello"
 * Explanation: Your reversed string should not contain leading or trailing spaces.
 *
 * Input: "a good   example"
 * Output: "example good a"
 * Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 */
/**
 * Method1:
 * 遍历s，遇到空格，就给另一个字符串变量赋值。
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let res = '';
    let word = '';
    let arr = [];
    //S1:为了统一处理s尾部有空格无空格，这里人为给s加空格
    s += ' ';
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ' ' && word) { //t1: 有可能连着两个空格，此时不应该push一个空字符串
            arr.push(word);
            word = '';
        }
        else if(s[i] === ' ' && !word) {
            continue;
        }
        else {
            word+=s[i];
        }
    }
    /*
    Q1:这里，是为了防止，s的末尾没有空格，此时最后一个单词不会push到栈。
    另一种简介的做法，就是人为在s后面增加空格
    if(word) {
        arr.push(word);
    }
    */
    while (arr.length>0) {
        res = res ? res + ' ' + arr.pop():arr.pop();
    }
    return res;
};


/**
 * Method2:
 * 一个经典的原地逆转思想，其他问题也有应用过。
 * 1. 逆转整个字符串。
 * 2. 按照单词再分别逆转回来。
 * 3. 去掉多余的空格
 * 但是这种方式适合c，可以将字符串当作数组操作，js似乎不太灵光
 */

/*
 * Method3:
 * 利用js本身工具函数，一句话解决
 * 1. stim去掉字符串头尾空格。(这里感觉不是很必要，因为filter本身也会过滤多余空格导致的空字符串)
 * 2. 按空格分割
 * 3. 过滤掉数组中的空字符串
 * 4. 数组反转
 * 5. 数组元素拼接空格转成字符串
 */
var reverseWords = function(str) {
    return str.trim().split(' ').filter(e => !!e).reverse().join(' ');
};

console.log(reverseWords(' hello world!  '));
console.log(reverseWords('a good   example'));
console.log(reverseWords('the sky is blue'));