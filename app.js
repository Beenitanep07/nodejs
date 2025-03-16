let express = require("express") //require that is include express
let app = express() //trigger
app.set("view engine", "ejs") // i am using ejs template engine as frontend so set all the configuration needed.....template engine chai ejs use gareko

app.get("/",function(req,res){
    //res.send("<h1>This is home page</h1>")
    res.render("home") //we dont have to give full path like /view/home.ejs and don't give .ejs extension as it will understand by its own
})
app.get("/about",function(req,res){
    name = "Beenita Neupane" //passing this name to app.js
    res.render("about",{name: name}) //send name is object form in key value pair
})

app.listen(3000,function(req,res){
    console.log("Project has started at port 3000")
})