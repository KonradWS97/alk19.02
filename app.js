const express = require("express")
const path = require("path")
const app = express()
const port = 3000

app.set("view engine","hbs")
app.use("/assets", express.static(path.join(__dirname,"./assets")))
app.use("/js", express.static(path.join(__dirname,"./js")))
app.get("/",function (req, res){
    res.render("index",{
        pageTitle: "lekcja"
    })
})
app.get("/about",function (req, res){
    res.render("about")
})
app.listen(port, ()=>{
    console.log(`server działa na porcie ${port}`)
})