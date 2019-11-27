const UserModel = require("../../models/admin/user.model");

function getLogin(req,res){
    res.render("admin/login",{data:{}});
};

function getLogout(req,res){
    res.render("admin/login",{data:{}});
};

function getDashboard(req,res){
    res.render("admin/dashboard");
};


function postLogin(req,res){
    let mail = req.body.mail;
    let pass = req.body.pass

    UserModel.find({user_mail:mail,user_pass:pass},(err,docs)=>{
        if(docs.length>0){
            //chuyen huong router
            res.redirect("dashboard");
        }
        else{
            let error="Tài khoản không hợp lệ !"
            res.render("admin/login",{data:{error:error}});
        }
    }) 
};

module.exports={
    getLogin:getLogin,
    getlogout:getLogout,
    getDashboard:getDashboard,

    postLogin:postLogin
};
