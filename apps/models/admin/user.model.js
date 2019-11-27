//goi model
const mongoose = require("../../../common/database")() //thực thi hàm trong database
//Mô tả 1 model user thông qua đối tượng schema
const shemaUser = new mongoose.Schema({
        //_id: mongoose.Schema.ObjectId, //_id là kiểu dữ liệu đặc biệt, phải được lấy ra từ đối tượng mongoose khong can dinh nghia no
        user_full: String,
        user_mail: String,
        user_pass: String,
        user_level: Number
})

//Khởi tạo model user từ cấu trức schema có trước
//gia tri nhan vao (ten dai dien,cau truc schema,collection trong db)
const UserModel = mongoose.model("User", shemaUser, "user")
// module.exports = UserModel
//Test thử
// UserModel.find((err, docs)=>{
//     //console.log(docs)
// })

//Them moi du lieu
// UserInsert = new UserModel({
//     user_full:"Hùng đẹp trai",
//     user_mail:"dobahung941997@gmail.com",
//     user_pass:"1997",
//     user_level:1
// })
// UserInsert.save();


//update data
// UserModel.updateOne({_id:"5ddd1ab064113b1a244d0d00"},{user_pass:"1997"})
// .exec((err,docs)=>{
//     //console.log(err);
// });


module.exports = UserModel;



