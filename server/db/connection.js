const mongoose = require("mongoose")

const CONNECTION_URL =  'mongodb://127.0.0.1:27017/MEMMORY' 

// mongoose.connect(CONNECTION_URL, { userNewUrlParser: true, useUnifiedTopology: true })
module.exports.connectDB = () => {
    mongoose.connect(CONNECTION_URL).then(()=>{
    console.log("Database Conectes successfully");
})
}