const mongoose = require("mongoose")

module.exports = () =>{
    mongoose.connect('mongodb://127.0.0.1:27017/hung', {useNewUrlParser: true})
    // .catch(error => handleError(error));
    return mongoose
}