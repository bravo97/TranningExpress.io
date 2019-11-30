const mongoose = require("../../../common/database")()

const shemaCategory = new mongoose.Schema({
    //_id: mongoose.Schema.ObjectId, //_id là kiểu dữ liệu đặc biệt, phải được lấy ra từ đối tượng mongoose khong can dinh nghia no
    cat_name:String
})


const categoryModel = mongoose.model("category",shemaCategory,"category");

module.exports = categoryModel;