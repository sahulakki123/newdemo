// for loop
// widatut indexing value ke print karana for loop se

// let lakki = ["Lakki",20,"bhopal",4,88]

// for(let vl of lakki){
//     console.log(vl)
// }

// for in loop -> to fetch indexing in "array"

// for(let k  of lakki){
//     console.log(k)
// }

// // let arr =[11,12,13,14,15,16,17,18,19,20]
// // let sum = 0
// // for (let b of arr){
// //     sum =sum +b
// // }
// // console.log(sum)

// // maltipal value ko add kar shkata hai 
// // push 

// let person = ["Lakki","bhopal",5.8]
// console.log(person)

// // push -> add eliment at list
// person.push(12334 , "bhai")
// console.log(person)

// // pop piche se singal value hata shkte hai
// person.pop()
// console.log(person)

// // unshift ->starting me laga skate hai( baht laga bhi sakte hai)
// person.unshift("cybrom")
// console.log(person)

// // shift -> starting value ko hata skte hai  
// person.shift()
// console.log(person)


// // slice -> 
// let la = lakki.slice(1,4)
// console.log(la)


// let ar = [1,2,3,4,5,6,7,8,9,10]
// let sl =  ar.slice(3,9)
// for(let vl of sl){
//     if (vl %2 ==0){
//         console.log(vl)
//     }
// }


// splice->eliment ko lagata haui END eliment ki haqta bhi hai
let lakki = ["Lakki",20,"bhopal",4,88]
// lakki.splice(2,3)
// indexing value of number of eliment add value
lakki.splice(2, 0, "global")
console.log(lakki)
