// for loop

for(let a = 1; a<11; a++){
    console.log(a)
}

for (let b = 10; b>1; b--){
    console.log(b)

}

// w a p to print squer of even number beetwn to 1 to 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log( i,  i * i);
    }
}


// for in LOOP table

for (let a = 2; a<=3; a++){
    for(let b = 1; b<11; b++){
    console.log(a*b)
}
}


// #####

// for (let a = 1; a<=5; a++){
//     document.write("#")
// }


// for (let a = 1; a<=5; a++){
//     for(let b = 1; b<=5; b++){
//     document.write('*')
// }
//     document.write("<br>")
// }


for (let r = 1; r<=5; r++){
    for(let c = 1; c<=5; c++)
        if (r == 1 || r == 5 || c == 1 || c == 5){
    document.write('*')
}else{
    document.write('&nbsp&nbsp')
}
    document.write("<br>")
}




for (let r = 1; r<=5; r++){
    for(let c = 1; c<=5; c++)
        if (r == 5 || r == 1 || c == 1 || c == 1){
    document.write('*')
}else{
    document.write('&nbsp&nbsp')
}
    document.write("<br>")
}


// *   *
//  * *
//   *
//  * *
// *   *



// Total number of rows
let n = 5;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < 5; j++) {
        if (j === i || j === n - 1 - i) {
            row += "*";
        } else {
            row += " ";
        }
    }
    document.write(row);
}

