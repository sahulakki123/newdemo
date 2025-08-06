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
}
fatchdata()