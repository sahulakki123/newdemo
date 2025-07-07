// Array [] ordered indexing
// indexing -> address / position of element -> 0

// let arr = ["cybrom", 15, 10.5,'L', true]
// console.log(arr[3])


// let ar1 = []
// for(let a = 0; a<5; a++){
//     ar1[a] = parseInt(prompt("Enter the element "));
// }
// console.log(ar1)


// wap to take integer 10 inputs from the user and print all  element in console

// let arr1 = []
// for(let a = 0; a<10; a++){
//     arr1[a] = parseInt(prompt("Enter the element "));
// }
// console.log(arr1) malti of value


let ar = [1,2,3,4,5,6,7,8,9,10]
let sum = 0
for(a = 0; a<10; a++){
    if (ar[a]%2 !=0){
        sum = sum + ar[a]
    }
}
console.log(sum)

