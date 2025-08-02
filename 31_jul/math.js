// math

// console.log(Math.floor(1+Math.random()*9));
// console.log(Math.floor(Math.random()*9));
// console.log(Math.floor(1000+Math.random()*9000));



// console.log(Math.floor(1+Math.random()*6));

// let  okk=()=>{
//     setTimeout(()=>{
//         alert("hii i am function")
//     },3000)

// }

// setInterval(()=>{
//     console.log("Lakki");
    
// },2000)




// let c=0
// let inter
// let  okk1=()=>{
//    inter = setInterval(()=>{
//       console.log(c);
//       c++   

//     if (c > 10) {
//       clearInterval(inter)
//     }
//     },1000)

// }
// let stop=()=>{
//   clearInterval(inter)

// }


// setInterval(()=>{
//   let Currtime = new Date()

//   let hour = Currtime.getHours()
//   let mins = Currtime.getMinutes()
//   let sec = Currtime.getSeconds()

//   let show1 = document.querySelector("#dishple")

//   hour = hour < 10 ? '0' + hour : hour;
//   mins = mins < 10 ? '0' + mins : mins;
//   sec = sec < 10 ? '0' + sec : sec;

//   let show = document.querySelector("#dishple");
//   show.textContent = `${hour}:${mins}:${sec}`;
// }, 1000);

 let hour = 0, minute = 0, second = 0;
let interval;

let updateDisplay = () => {
  let h = String(hour).padStart(2, '0');
  let m = String(minute).padStart(2, '0');
  let s = String(second).padStart(2, '0');
  let a= document.getElementById("timer")
  a.innerText = `${h}:${m}:${s}`;
};

let startTimer = () => {
  if (interval) return;
  interval = setInterval(() => {
    second++;
    if (second === 60) {
      second = 0;
      minute++;
    }
    if (minute === 60) {
      minute = 0;
      hour++;
    }
    updateDisplay();
  }, 1000);
};

let stopTimer = () => {
  clearInterval(interval);
  interval = null;
};

let resetTimer = () => {
  clearInterval(interval);
  interval = null;
  hour = 0;
  minute = 0;
  second = 0;
  updateDisplay();
};
