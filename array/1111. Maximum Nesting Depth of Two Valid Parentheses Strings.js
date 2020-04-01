/**
 * 按照深度的奇偶，分配属于哪一组
 * @param seq
 * @return {Array}
 */
var maxDepthAfterSplit = function(seq) {
    const result = [];
    let depth = 0;
    for(let ch of seq) {
        if (ch == '(') {
            ++depth;
            result.push(depth & 1);
        } else  {
            result.push(depth & 1);
            --depth;
        }
    }
    return result;
};

// console.log(maxDepthAfterSplit('(())()'));