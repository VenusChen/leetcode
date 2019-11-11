/**
 * Hint:
 * 先转数字，再++，最后转回数组，理想很美好，显示很残酷，这种很容易导致整数溢出
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num = 0;
    for(let i = 0; i < digits.length; i++) {
        num+=digits[i]*Math.pow(10, digits.length-i-1);
    }
    num++;
    let res = [];
    num = num.toString(); //把数字转换成字符串
    for (let i = 0; i < num.length; i++) {
        res.push(parseInt(num[i]));
    }
    return res;
};

/**
 * Hint:
 * 直接操作数组，自己判断是否有进位，有的话就扩充数组
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let badd=true;
    for(let i = digits.length - 1; i >= 0; i--) {
        if(badd && digits[i] === 9) {
            digits[i] = 0;
            badd = true;
        }
        else if(badd && digits[i] !== 9) {
            digits[i]++;
            badd = false;
        }
        else {
            break;
        }
    }
    if(digits[0] === 0) {
        digits.unshift(1);
    }
    return digits;
};


// console.log(plusOne([0]));
// console.log(plusOne([1,2,3]));
// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]