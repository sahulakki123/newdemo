// // Date object 

// let time = new Date()

// console.log(time.getFullYear()); //2025
// console.log(time.getMonth()); //6 + 1 = 7
// console.log(time.getDate());
// console.log(time.getHours());
// console.log(time.getMinutes());
// console.log(time.getSeconds());
// console.log(time.getMilliseconds()); // 1000

// console.log(time.toLocaleString());


// let days = ['sun','mon','tue','wed','thr','fir','sat']

// console.log(days[time.getDay()]);


// let Months= ['des','jun','fab','mar','apr','may','jul','ag']

// console.log(Months[time.getMonth()]);



// let age = prompt("enter the age")
// let carent = time.getFullYear()-age
// console.log(carent);


let show = document.querySelector("#show");

let t = new Date();

let date = t.getDate();
let year = t.getFullYear();

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let day = days[t.getDay()];

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let month = months[t.getMonth()];

let Seconds = t.toLocaleTimeString()

show.innerHTML += `
  <tr>
    <td>${date}</td>
    <td>${year}</td>
    <td>${day}</td>
    <td>${month}</td>
    <td>${Seconds}</td>
  </tr>
`






