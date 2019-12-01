const UserModel = require("../../models/admin/user.model");

function getList(req,res){
    pageNum = req.query.pageNum
    UserModel.find({},function(err,docs){
        res.render("admin/user",{data:{data:docs}});
    }).limit(4).skip(1*pageNum)
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
                        res.redirect("list");
                    }
                });

                
            }
        })  
    }
};

function getEdit(req,res){
    _id = req.query._id
    UserModel.findOne({_id:_id},function(er,docs){
        res.render("admin/edit_user",{data:{data:docs}});  
    })
};

function postEdit(req,res){
    _id=req.query._id
    name= req.body.user_full,
    mail= req.body.user_mail,
    pass= req.body.user_pass,
    re_pass = req.body.user_re_pass,
    level = req.body.user_level

    // console.log(_id,name,mail,pass,re_pass,level);
    UserModel.update({_id:_id},{$set:{
        user_full:name,
        user_mail:mail,
        user_pass:pass,
        user_level:level
    }},function(err,docs){
        res.redirect("back");
    })
}

function getDel(req,res){
    _id = req.query._id
    UserModel.remove({_id:_id},function(err,docs){
        if(err==null){
            res.redirect("back");
        }
    })
};

module.exports = {
    getList:getList,
    getAdd:getAdd,
    getEdit:getEdit,
    getDel:getDel,

    postAdd:postAdd,
    postEdit:postEdit
};

