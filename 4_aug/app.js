

let showdata=()=>{
    localStorage.setItem("username","lakki")
    localStorage.setItem("username",20)

    location.reload()
}

let clearedata=()=>{
    localStorage.removeItem("username")
    localStorage.removeItem("userage")
    // show.innerHTML=localStorage.removeItem("username")
    location.reload()
}

let show = document.querySelector("#display")
show.innerHTML=localStorage.getItem("username")