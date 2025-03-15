let express = require("express") //require that is include express
let app = express() //trigger

app.get("/",function(req,res){
    res.send("<h1>This is home page</h1>")
})

app.listen(3000,function(req,res){
    console.log("Project has started at port 3000")
})