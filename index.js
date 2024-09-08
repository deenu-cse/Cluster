const express = require("express")
const app = express()

app.get('/',(req,res)=>{
   return res.send("Hellow from express")
})

app.listen(5000,()=>{
    console.log(`Port is 5000 : ${process.pid}`)
})