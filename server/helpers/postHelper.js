const PostMesage = require("../models/postMessages")


module.exports.postHelper = {
     

    // CREATING NEW POST....
    createPosts : (post)=> {

        return new Promise(  (resolve, reject) => {
                newPostMesage =  new PostMesage(post)

                newPostMesage.save().then((result) => {
                    resolve(result)
                }).catch((err) => {
                    reject(err)
                })
        })

    },

    // FINDING ALL POSTS

    getAll: (data) => {

        return new Promise((resolve, reject) => {
            
            PostMesage.find().then((result) => {
                resolve(result)
            }).catch((err) => {
                reject(err)
            })

        })
    }
}