const r = {name: "Punnawish", ID: "098",lastname: "Tangkananuwat",
    getfullname(){
        return this.name +" "+ this.lastname
    } //object literal
 }
 console.log(r)
 console.log(r.getfullname())
 console.log("-----------------------------")
 const t = {name: "Adam", lastname: "Smith", Father:[{name: "John", lastname: "Smith"} ]}
  console.log(t)
 console.log("-----------------------------")
  const book={isbn:12345678, title:'Introduction to JS',authors:[{firstname:'John'}, {lastname:'Smith'},{firstname:'Danial'}, {lastname:'Doh'}], versions:[1.0, 2.0,3.0], isAvailable:true, getISBN(){return this.isbn}}
console.log(book)
console.log(book.getISBN())
console.log(book.authors[0].firstname)
 console.log("-----------------------------")
 console.log(book.authors)
 book.publicDate= new Date(2025,1 ,1)
 console.log(book)
 delete book.isAvailable
 console.log(book)
  console.log(book["publicDate"])
  console.log(book.publicDate)
   console.log("-----------------------------")
   for(const key in book){
    console.log(book[key])
   }
   //2. constructor function
   /*function Book(isbn, title){
    this.isbn = isbn
    this.title = title 
   }
   const b1 = new Book(123, 'JS')
   const b2 = new Book(456, 'CSS')*/
   //3. class
   /*class Book{
    constructor(isbn, title){
        this.isbn = isbn
        this.title = title 
    }
    getISBN(){
        return this.isbn
    }
    getTitle(){
        return this.title
    }
    getBookInfo(){
        return `isbn: ${this.isbn}, title: ${this.title}`
    }
   }
   const myBook = new Book(123, 'JS')
   console.log(myBook.getBookInfo())
   console.log(myBook.getISBN())
   //4. using Object.create(existingObj)
   const journal= Object.create(myBook)
   journal.isbn = "5678"
   console.log(journal)
console.log(journal.isbn)
console.log(journal.title)
console.log("-----------------------------")
*/
const a1 ={id: 1, title: 'js'}
function doSth(x){
    x = {id: 1, title: 'js'}
    x.id = 555
}
console.log(a1)
doSth(a1)


const m1 ={id:1, title:'JS'}
const m2 ={id:1, title:'JS'}
const m3 = m1
console.log(m1==m2)
console.log(m1===m2)
console.log(m1===m3)
console.log("-----------------------------")
function Compared(b1,b2){
    if(b1.isbn === b2.isbn)
        return true
    else
        return false
    
}
function Comp(x,y){
    return x.isbn===y.isbn?true:false
}
const b1={isbn:123, title:"JS"}
const b2={isbn:123, title:"JS"}
console.log(Compared(b1,b2))
console.log("-----------------------------")


const keys = Object.keys(b1) // array of keys //["isbn", "Title"]
//const Values = Object.Values(b1) // array of Values //["isbn", "Title"]
//destructuring on array
const colors=['red', 'green', 'blue']
const [, item2]=colors //const items=colors[1]
console.log(`item2= ${item2}`)
//destructuring on object
const l1={isbn: 1234, title: 'JS', authors:{firstname: 'Jon',lastname:'Smith'}}

const {isbn,title}=b1
console.log(isbn)//1234
console.log(title)//JS
//const {authors:{firstname}}=b1
//console.log(firstname)
//destructuring on Object
const h1 ={isbn: 1234,title: 'JS', authors: {firstname: 'Jon'},}

//pratice shallow Equality
let student1 = {Name: "Somchai", Age: 19}
let student2 = {Name: "Somying", Age: 18}
function shallowEquality(n1,n2){
    const  Key1= Object.keys(n1)
    const  Key2= Object.keys(n2)
    if(Key1.length !== Key2.length){
        return false
    }
    for(let key of Key1){
        if(n1[key] !== n2[key]){
            return false
        }
    }
    return true            //เปรียบเทียบว่า Object เท่ากันหรือไท่โดยการเทียบความยาวของkeyและเทียบkeyไปเลยว่าvalueตรงกันหรือไม่
}
