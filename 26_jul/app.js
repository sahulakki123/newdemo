// Array of objects

// map  or filter
let a = [2,4,6,8,10]

// let b = a.map( (e)=> e*2)
// console.log(b)




// filter 


// let a1 = [2,3,6,7,10,13]
// let b = a1.filter((e)=>{
//     return e%2==0
// })
// console.log(b);

// let a1 = [2,3,6,7,10,12,14]
// let b = a1.filter((e)=>{
//     return e>10
// })
// console.log(b);



// forEach


a.forEach((e) => {
    console.log(e*2);

});

a.forEach((e) => {
    console.log(e%2==0);

});

let  =[1,2,3,4,5,6]





let Aoo=[{
    name:"Lakki",
    age:20,
    city:"bhoapl"

},{
    name:"ram",
    age:21,
    city:"betul"
},{
    name:"shyam",
    age:22,
    city:"indore"
},{
    name:"rohit",
    age:23,
    city:"ujjain"
}]

console.log(Aoo);
console.log(Aoo[3].name);


Aoo.map((e)=>{
    console.log(e.name);
    
})

let show = document.querySelector("#show")
Aoo.map((e)=>{
    // show.innerHTML+= `<div>
    // <h1>${e.name}</h1>
    // <p> ${e.age}</p>
    // <p>${e.city}</p>
    // </div>`

    show.innerHTML+= `
    <tr>
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td>${e.city}</td>
    </tr>
    `
    
})



