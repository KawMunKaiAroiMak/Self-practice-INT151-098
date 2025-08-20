// /*// 1. function declaration
//     function multiply(a,b){
//         return a*b;
//     }
//     function doSomething(x){
//         return x(3,5)
//     }
// console.log(doSomething(multiply)) // pass function to another function //15
// console.log(multiply(2,3)) // 6

// // 2. function expression (using arrow function syntax)
// const multiply2 = (a,b) => a*b; //ไม่มี {} = auto return
// console.log(multiply2(3,7))

// //3. function expressing (using function declaration)
// const multiply3= function(a,b){return a*b}
// console.log(multiply3(4,9))
// console.log(typeof multiply)   //function
// console.log(typeof multiply2)  //function
// console.log(typeof multiply3)  //function
// const x = multiply
// const y = multiply2
// const z = multiply3
// console.log(typeof x)
// console.log(typeof y)
// console.log(typeof z)
// if(x=== multiply)
//     console.log("x = multiply1")

// // higher order function
// function sayGoodBye(){
//     return 'Good Bye'
// }
// function doSomething2(){
//     return sayGoodBye
// }
// console.log(doSomething2()()) //Good Bye (sayGoodBye())
// // Object parameter 
// function myFunc(theObject){
//     theObject.model = "A9999"
// }
// const product = {model: "A1001", price: 199}
// console.log(product.model) //A1001
// myFunc(product);
// console.log(product.model) //"A9999"

// function Sum(x,y, ...z){
//     for (argu of arguments){
//         console.log(argu)
//     }
//     console.log(arguments.length)
//     console.log(x)
//     console.log(y)
//     console.log(z)
// }
// Sum(1,2,3,4,5,6,7,8)


// // function plus(...a){
// //     let b = 0
// //     for(let k of arguments){
// //         b += k
// //     }
// //     return b
// // } */

//pratice
function getFreqOfWords(sentence) {
    if (sentence === null || sentence === undefined) {
        return undefined
    }
    result = {}
    sentenceArray = sentence.split(' ').filter(Boolean)
    for (const i of sentenceArray) {
        result[i] = i in result ?  result[i] + 1 : 1
    }
    return result
}