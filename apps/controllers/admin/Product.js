const CategoryModel = require("../../models/admin/category.model")
const ProductModel= require("../../models/admin/product.model")

async function getList(req,res){
    let products = await ProductModel.find().populate("categories");
    products = JSON.parse(JSON.stringify(products));
    
    // for(values in products){
    //     console.log(products[values].categories[0].cat_name);
    // }
    res.render("admin/product",{data:{products:products}});
};

function getAdd(req,res){
    res.render("admin/add_product");
};

function getEdit(req,res){
    res.render("admin/edit_product");
};

function getDel(req,res){
    res.render("admin/del_product");
};


function getTest(req,res){
    res.send(`
        <form method="post" >
            <input type="text" name="mail"/>
            <input type="submit" name="sbm" value="Send" />
        </form>
    `);
};

function postTest(req,res){
    let mail=req.body.mail;
    res.send(mail);
};


module.exports = {
    getList:getList,
    getAdd:getAdd,
    getEdit:getEdit,
    getDel:getDel,


    getTest:getTest,
    postTest:postTest
};