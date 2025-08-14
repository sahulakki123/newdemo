let fatdata=async()=>{
    let url=''
    let res = await fetch(url,{method:"GET"})
    let data = await res.json()
    console.log(data);
    
}