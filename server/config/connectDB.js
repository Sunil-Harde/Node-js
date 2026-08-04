const mongoose = require("mongoose")


function connect() {


    mongoose.connect("mongodb://localhost:27017/")
        .then(() => console.log("server connect successfully"))
        .catch((err) => console.log(err))



}


module.exports = connect