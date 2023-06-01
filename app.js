console.log("Web Server boshlash");
const express = require("express");
const app = express() ;
const router =require("./router.js")


//Mongo DB chaqirish
// const db = require("./server").db();
// const mongodb =require("mongodb")



// 1 express ga kirib kelyatgan malumotlarga bogliq bolgan kodlar yoziladi. KIRISH kodlari
app.use(express.static("public"));
app.use(express.json());// kirib kelyatgan json formatdagi data ni objectga ogiradi
app.use(express.urlencoded({extended:true})); //html forumdan request qiladi 

//2 Session

//3 BSSR -backend serverside render  VIEWS ga bogliq kodlar
app.set("views", "views");
app.set("view engine","ejs");


//4 Routing
// app.use("/resto",router_bssr);
app.use("/", router);


module.exports = app;

