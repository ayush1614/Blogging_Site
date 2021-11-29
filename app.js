const express = require("express") ;
const bodyParser  =require("body-parser") ;

const app =express() ;

app.use(bodyParser.urlencoded({extended :true})) ;


app.get("/" , function(request ,response){
    response.sendFile(__dirname + "/index.html") ;
})

app.listen(process.env.PORT ||3000 , function (request, response){
    console.log("Server started at port 3000 .")
})