
// var bar = {
//     myName:"time.geekbang.com",
//     printName: function () {
//         console.log(this.myName)
//     }
// }
// function foo() {
//     let myName = "极客时间"
//     return bar.printName
// }
// let myName = "极客邦"
// //1
// let _printName = foo()
// _printName()
//
// //2
// bar.printName()
//
// //3
// foo()();


// let bar = {
//     myName : "极客邦",
//     test1 : 1
// }
// function foo(){
//     this.myName = "极客时间"
// }
// foo.call(bar)
// console.log(bar)
// console.log(myName)


var myObj = {
    name : "极客时间",
    showThis: function(){
        console.log(this)
        function bar(){console.log(this)}
        bar()
    }
}
myObj.showThis()