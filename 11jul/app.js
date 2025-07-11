// bom -> (browser object model) methods prompt , alert, confirm to display the msg in the html page on browser

function age(){
    let age = confirm("are you 20")
    if(age){
        alert("ur eligible")
    }
    else{
        alert("ur not eligible")
    }
}
 age()