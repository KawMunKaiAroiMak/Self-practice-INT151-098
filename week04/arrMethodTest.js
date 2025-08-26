// const words = ["mango", "apple", "mangosteen", "orange", "mangoes"] //filter function does not change an original array
// //1.annonymous arrow function
// const shortWords = words.filter((word) => word.length <= 6) 



// //2. annonymous function declaration
// const shortwords = words.filter(function(word){
//     return word.length <= 6
// })

// //3.reuse callback function(named function)
// function wordLength(word){
//     return word.length <= 6
// }
// const shortworDs = words.filter(wordLength)

// //sort function change original array
// const sortedWords = words.sort()

// console.log(`sortedword = ${sortedWords}`)

// console.log(`Words = ${words}`)
// console.log(`ShortWords = ${shortWords}`)

// const Upper = words.map(w => w.toUpperCase())
// console.log(Upper)

// const students = [
//   { id: 1, name: "Somchai Jaidee" },
//   { id: 2, name: "Suda Deejai" },
//   { id: 3, name: "John Smith" },
// ]
// const id = students.map(a => a.id)
// console.log(id)
// const even = id.filter(f => f % 2 == 0)
// console.log(even)


// const finDs = Upper.includes("MANGO")
// console.log(`find = ${finDs}`)

// const words1 = ["Mango", "apple", "mangosteen", "orange", "mangoes"]
// const findmango = words1.filter(word => word.toLowerCase().includes("mango"))

// console.log(findmango);




// const words3 = ["mango", "apple", "mangosteen", "orange","mangoes"]
// const findpoanramai = words.find(word => word.toLowerCase() === "apple") ? "has apple" : "does not have apple"

// console.log(findpoanramai)

// const product = [1, 'RED', 102]
// const productDetail = product.reduce((detail, prop) => {
//     return prop === 'RED' ? detail?.concat('R') : detail?.concat(prop)
// }, '')
// console.log(productDetail)


// const carts = [
//   { productId: 1001, price: 500, quantity: 2 },
//   { productId: 1002, price: 10, quantity: 3 },
//   { productId: 1003, price: 5, quantity: 10 },
// ]
// let total = 0
// const l1 = carts.reduce((total,product) => total + product.price*product.quantity, 0 )
// console.log(`{total: ${l1}}`)

// const cart= [
//   { productId: 1001, price: 500, quantity: 2 },
//   { productId: 1002, price: 10, quantity: 3 },
//   { productId: 1003, price: 5, quantity: 10 },
// ]
// // cart[cart.length] = { productId: 5555, price: 1, quantity: 4 }
// cart.push({ productId: 5555, price: 1, quantity: 4 })
// console.log(cart)
// console.log(cart.pop()) //{ productId: 5555, price: 1, quantity: 4 }
// console.log(cart.length) //3

// const v = cart.shift()
// console.log(`shift = ${v}`)
// console.log(cart)
 
const words1 = ["Mango", "Apple", "mangosteen", "orange", "mangoes"]
// let sp1 = words1.splice(2,1,"banana")
// //console.log(words1)
// let sp2 = words1.splice(3,2)
// console.log(words1)
// let sp3 = words1.splice(2,0,'melon','cherry')
// console.log(words1)
let s1 = words1.slice(2,5)
let s2 = words1.slice(0,4)
let s3 = words1.fill(null)

console.log(s1)
console.log(s2)
console.log(s3)