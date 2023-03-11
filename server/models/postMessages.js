const mongoose = require("mongoose")

const postSchema = mongoose.Schema({

    title: String,
    message:String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: String,
        default: 0
    },
    createAt: {
        type:Date,
        default: new Date()
    }
})

const PostMesage = mongoose.model("PostMessage", postSchema)

module.exports = PostMesage;