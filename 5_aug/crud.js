// fetch (GET ,POST, PUT, DELETE)

let fatchdata= async()=>{
    let url = "http://localhost:3000/carbook"

    let res = await fetch(url,{method:"GET"})

    let data = await res.json()

    console.log(data);
    
    let show = document.querySelector("#showdata")
    data.map((e)=>{
        show.innerHTML+=`
        <tr>
            <td>${e.name}</td>
            <td>${e.car}</td>
            <td>${e.city}</td>
            <td>${e.p}</td>
            <td>${e.color}</td>
            <td onclick="del('${e.id}')">Delete</td>
        </tr>`
    })

}

let del=(id)=>{

    let url =`http://localhost:3000/carbook/${id}`
    fetch(url,{method:"DELETE"})



let book=()=>{
    let name = document.querySelector("#name").value
    let car = document.querySelector("#car").value
    let city = document.querySelector("#city").value
    let p = document.querySelector("#p").value
    let color = document.querySelector("#color").value

    let url = "http://localhost:3000/carbook"

    fetch(url,{

        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({

            name:name,
            car:car,
            city:city,
            p:p,
            color:color
        })

    })
    location.href="crud.html"
    return false
}
}
fatchdata()