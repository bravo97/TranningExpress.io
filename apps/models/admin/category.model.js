const mongoose = require("../../../common/database")();

const schemaCategory = new mongoose.Schema({

    _id:{
        type:mongoose.Schema.ObjectId,
        ref:"Product"
    },
    cat_name:String
})

const CategoryModel = new mongoose.model("Category",schemaCategory,"category");

module.exports = CategoryModel;