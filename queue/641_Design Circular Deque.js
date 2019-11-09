/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.top = 0;   //首元素位置
    this.end = 0; //末元素位置
    this.k = k;//队列容量
    this.queue = new Array(k+1).fill(null); //数组，存储元素。为了方便区分空队列和满队列，队列要多出一个位置来存储end指针
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    //环已经满
    if((this.end+1)%(this.k+1) === this.top) {
        return false;
    }
    //第一个元素前面插入value
    this.top = (this.top+this.k)%(this.k+1);
    this.queue[this.top] = value;
    return true;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    //环已经满
    if((this.end+1)%(this.k+1) === this.top) {
        return false;
    }
    //最后一个元素后面插入value
    this.queue[this.end] = value;
    this.end = (this.end+1)%(this.k+1);
    return true;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    //当前空队列，没有元素可以删除
    if(this.top === this.end) {
        return false;
    }
    //删除首个元素
    this.queue[this.top] = null;
    this.top = (this.top+1)%(this.k+1);
    return true;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    //当前空队列，没有元素可以删除
    if(this.top === this.end) {
        return false;
    }
    //删除队尾元素
    this.end = (this.end+this.k)%(this.k+1);
    this.queue[this.end] = null;
    return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    //当前空队列，没有元素可以删除
    if(this.top === this.end) {
        return -1;
    }
    return this.queue[this.top];
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    //当前空队列，没有元素可以删除
    if(this.top === this.end) {
        return -1;
    }
    return this.queue[(this.end+this.k)%(this.k+1)];
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return (this.top === this.end);
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return ((this.end+1)%(this.k+1) === this.top);
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
var obj = new MyCircularDeque(3);
console.log(obj.insertLast(1));
console.log(obj.insertLast(2));
console.log(obj);
console.log(obj.insertFront(3));
// console.log(obj.insertFront(4));





//
// var param_2 = obj.insertLast(2)
// var param_9 = obj.getFront()
// var param_10 = obj.getRear()
// var param_3 = obj.deleteFront()
// var param_4 = obj.deleteLast()
// var param_5 = obj.getFront()
// var param_6 = obj.getRear()
// var param_7 = obj.isEmpty()
// var param_8 = obj.isFull()
// console.log(param_1, param_2, param_9, param_10, param_3, param_4, param_5, param_6, param_7, param_8);