function echo(values){
    return values
};

function getLength(str){
    return str.length
};
const TAX = 0.07;
let x = 1;
//export list
//export { echo, getLength, TAX}
const MAXstudent = 60;
//module.exports = { echo, getLength as default, MAXstudent } //{echo: echo, getLength: getLength}

class Book{
    constructor(isbn, title){
    this.isbn = isbn
    this.title = title}
}
export { echo, getLength as default, TAX as VAT , Book}