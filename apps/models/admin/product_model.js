const mongoose = require("../../../common/database")()

const schemaProduct = new mongoose.Schema({
    cat_id:mongoose.Schema.ObjectId,
    prd_name:String,
    prd_image:String,
    prd_price:Number,
    prd_warranty:String,
    prd_accessories:String,
    prd_new:String,
    prd_promotion:String,
    prd_status:String,
    prd_featured:Number,
    prd_details: String
})

const ProductModel = mongoose.model("Product",schemaProduct,"product")

module.exports = ProductModel;
