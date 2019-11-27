const UserModel = require("../../models/admin/user.model");

function getList(req,res){
    res.render("admin/user");
};

function getAdd(req,res){
    res.render("admin/add_user",{data:{}});
};

function postAdd(req,res){
    name= req.body.user_full,
    mail= req.body.user_mail,
    pass= req.body.user_pass,
    re_pass = req.body.user_re_pass,
    level = req.body.user_level

    let error

    if(pass != re_pass){
        error="Nhập lại mật khẩu không đúng! Vui lòng nhập lại";
        res.render("/admin/user/add",{data:{error:error}});
    }
    else{
        UserModel.find({user_mail:mail},(err,docs)=>{
            if(docs.length>0){
                error="Email đã tồn tại! Vui lòng nhập email khác!";
                res.render("/admin/user/add",{data:{error:error}});
            }
            else{
                userInsert = new UserModel({
                    user_full:name,
                    user_mail:mail,
                    user_pass:pass,
                    user_level:level
                })
                userInsert.save(function(err){
                    console.log(err);
                    if(err == null){
                        res.redirect("/list");
                    }
                });

                
            }
        })  
    }
};

function getEdit(req,res){
    res.render("admin/edit_user");
};

function getDel(req,res){
    res.send("User Delete");
};

function postUser(req,res){
    res.render("admin/user");
};

module.exports = {
    getList:getList,
    getAdd:getAdd,
    getEdit:getEdit,
    getDel:getDel,

    postUser:postUser,
    postAdd:postAdd
};