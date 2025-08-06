
let a = [1,2.4,true,'abc']
a.pop()
console.log(a[0])
console.log(a[a.length-1])
for(i = 0;i< a.length;i++){
    console.log(`index: ${i} = ${a[i]}` )
}
console.log(a)
let c = ["palm","wish"]
console.log(`${c[0]} ${c[1]}`)
let o = a
o[o.length+2] = "TS"
o[4]= "d"
delete o[o.length-1]
console.log(o.length)
console.log(o)

let q = [["a","b","c",["f","s","g"]],["e","f",'g'],{id : 2,},{firstname: "Punnawish"}]
console.log(q)
//array contains many objects
const colors=[{id:1, name:'red', tone:'hot'},{id:2, name:'purple', tone:'cool'},{id:3, name:'white', tone:'neutral'}]
console.log(colors)
 
const contacts=[{email:['abc@gmail.com','foo@kmutt.ac.th']},
{address:['Bangkok', 'Puket']}]
console.log(contacts)
 
//array contains many arrays
const groups=[['Malee', 'Jane'], ['John', 'Jay', 'Pete']]
console.log(groups)

for(b of groups){
    console.log(b[b.length-1])
}
function c(){
    console.log()
}
let ab = "hello world"
let cd = [...ab] 
console.log(cd)

const hf = new Array
const m = new Array(10)
const k = new Array(2,5,'b','x')
console.log(hf)
console.log(m)
console.log(k)
const arr4 = Array.of(7)
console.log(arr4)

const p = "Palm"
let arr5 = Array.from(p)
 console.log(arr5)
let asdd = [1,2,3,4]
const [s,d,h,g] = [1,2,3,4]
console.log(s+d)
