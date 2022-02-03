const express = require('express')
const res = require('express/lib/response')
const mongoose =require('mongoose')
const path = require('path')
const user =require('./Users')
const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

var DBUrl='mongodb+srv://test:1234@cluster0.9c0ug.mongodb.net/PaymentServer?retryWrites=true&w=majority'
mongoose.connect(DBUrl)
    .then(()=>{console.log("DB is Connected")})
    .catch((err)=>{console.log(err)})


    app.get('./Users.js',(req, res)=>
{
    var user = new user(
        {
            "name":"harsh",
            "email":"harsh@gmail.com",
            "ReferredUser":"A",
            "isPaymentMade":'true',
            "totalEarnings":'50'
        }
    )
    user.save()
        .then((result)=>
        {
            res.send(result)
        })
        .catch((err)=>log.console(err))
})

app.listen(5000,()=>{
    console.log("listening at port 5000");
})