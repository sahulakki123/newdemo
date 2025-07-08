// object -> object ak multiple date type hota hai jo  - > {} -> unordered
// date store - > key : value

// let person = {
//     name: "Lakki",
//     contact: 401515,
//     city: "bhopal"
// }
// console.log(person)
// console.log(person.city)
// console.log(person.name)

// // add value in bject with keys 
// person.emaild = "lakki51@gmail.com"
// person.pass = "54848"
// console.log(person)

// // value overwrite 
// person.city = "delhi"
// console.log(person)

// // deleting value
// delete person.pass
// console.log(person)


// let emp = {
//     emp_name : ["lakki","bablu"],
//     emp_qwali: "b.tech",
//     emp_city: "bhopal",
//     emp_contect: [646116541,54611641],
//     emp_gamil:{
//         emp_amount : 6526211,
//         emp_sdfnwkf: "zffdkjf"

//     }
// }

// console.log(emp.emp_name[0])
// console.log(emp.emp_contect[1])
// console.log(emp.emp_gamil.emp_amount)


// let emp = {
//     emp_name:prompt("Enter emp_name ") ,
//     emp_designation:prompt("Enter emp_designation "),
//     emp_address:prompt("Enter the emp_address "),
//     emp_contact:prompt("Enter the  emp_contact ")
// }
// console.log(emp)




let person = {
    name: "Lakki",
    contact: 401515,
    city: "bhopal"
}
// to fetch keys of an object so we uses for on loop 

// for (let k in person){
//     // console.log(k)
//     console.log(person[k])
// }

// Object .keys

let key = Object.keys(person)
console.log(key[0])


// Object.values
let vl = Object.values(person)
console.log(vl)


