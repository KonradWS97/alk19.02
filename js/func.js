alert("hello world")

let btn = document.getElementById("btn")
let val =document.getElementById("val")
btn.addEventListener("click", function(){
    console.log(val.value)
})