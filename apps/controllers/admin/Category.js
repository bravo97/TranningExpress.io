const categoryModel = require("../../models/admin/category.model");
function getList(req,res){
    categoryModel.find({},function(err,docs){
        if(err==null){
            console.log(docs);
            res.render("admin/category",{data:{data:docs}});
        }
    })
    
};

function getAdd(req,res){
    res.render("admin/add_category",{data:{}});
};


function postAdd(req,res){
    cat_name=req.body.cat_name
    let error
    // if(cat_name == null){
    //     error="Vui lòng nhập tên cho danh mục!"
    //     res.render("/admin/category/add",{data:{error:error}})
    // }
    // else{
        categoryModel.find({cat_name:cat_name},(err,docs)=>{
            if(err != null){
                error = err
                res.render("admin/category/add",{data:{error:error}})
            }
            else{
                if(docs.length == 0){
                    categoryInsert = new categoryModel({
                        cat_name:cat_name
                    })
                    categoryInsert.save(function(err,docs){
                        if(err==null){
                            res.redirect("/admin/category/list")
                        }
                    })
                }
            }
        })
}

function getEdit(req,res){
    _id = req.query._id

    categoryModel.findOne({_id:_id},function(err,docs){
        res.render("admin/edit_category",{data:{data:docs}});
    })
    
};

function getDel(req,res){
    res.render("Categoty Delete");
};

module.exports = {
    getList:getList,
    getAdd:getAdd,
    getEdit:getEdit,
    getDel:getDel,

    postAdd:postAdd
};