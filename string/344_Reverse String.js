/**
 * Desc:
 * Write a function that reverses a string. The input string is given as an array of characters char[].
 Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 You may assume all the characters consist of printable ascii characters.
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let i = 0,
        x = s.length -1;
    while (i < x) {
        [s[i], s[x]] = [ s[x], s[i] ]; //这里是？
        i++;
        x--;
    }
};


// let s = 'hello';
// s[1] = 'q';
// console.log(s[1]);
// console.log(swap('hello', 0, 3));
// reverseString(s);
// console.log(s);
