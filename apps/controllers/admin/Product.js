const categoryModel = require("../../models/admin/category_model")
const productModel = require("../../models/admin/product_model")

function getList(req,res){
    res.render("admin/product");
};

function getAdd(req,res){
    console.log("davao")
    categoryModel.find({},(err,docs)=>{
        console.log(docs)
        res.render("admin/add_product",{data:{data:docs}});
        
    })
    
};

function postAdd(req,res){
    cat_id = req.body.cat_id
    prd_name=req.body.prd_name,
    prd_image=req.body.prd_image,
    prd_price=req.body.prd_price,
    prd_warranty=req.body.prd_warranty,
    prd_accessories=req.body.prd_accessories,
    prd_new=req.body.prd_new,
    prd_promotion=req.body.prd_promotion,
    prd_status=req.body.prd_status,
    prd_featured=req.body.prd_featured,
    prd_details=req.body.prd_details

    console.log(cat_id);
}

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

    postAdd:postAdd,


    getTest:getTest,
    postTest:postTest
};