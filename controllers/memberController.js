const Member = require("../models/member");

let memberController =  module.exports;

memberController.signup = async (req,res) => {
    try{  
      console.log("POST:cont/signup");
      const data =req.body;
      const member =new Member();
      const new_member = await member.signupData(data);
      res.json({state:'succeed',data: new_member})
  }catch(err){
      console.log(`ERROR , cont/signup ${err.message}` );
      res.json({state:'fail', message:err.message });
  
  }}

memberController.login = (req,res) => {
    console.log("POST cont.home");

    res.send("login sahifasidasiz")
};

memberController.logout = (req,res) => {
    console.log("GET cont.home");

    res.send("logout sahifasidasiz")
};


