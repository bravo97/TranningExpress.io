const UserModel = require("../../models/admin/user.model");

function getList(req,res){
    res.render("admin/user");
};

function getAdd(req,res){
    res.render("admin/add_user");
};

function postAdd(req,res){
    console.log("Add user");
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