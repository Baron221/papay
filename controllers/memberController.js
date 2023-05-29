let memberController =  module.exports;

memberController.home = (req,res) =>{
    console.log("GET cont.home");
    res.send("home sahifasidasiz");

};

memberController.signup = (req,res) => {
    console.log("POST cont.home");

    res.send("signup sahifasidasiz")
};

memberController.login = (req,res) => {
    console.log("POST cont.home");

    res.send("login sahifasidasiz")
};

memberController.logout = (req,res) => {
    console.log("GET cont.home");

    res.send("logout sahifasidasiz")
};


