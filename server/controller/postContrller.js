const { postHelper } = require("../helpers/postHelper")


module.exports = {

  // CREATING POSTS
  create: (req, res) => {

    try {
         postHelper.createPosts(req.body).then((result) => {
        return res.status(200).json({
          success:true,
          message:"Post created Successfully",
          data:result
        })        
       })
    } catch (err) {
      return res.status(409).json({
        message:"Failed to create post"
      })
      
    }

  },

  // FINDING ALL THE POSTS
  getPosts: (req, res) => {

    try {
      postHelper.getAll(req.body).then((reslut) => {

        return res.status(200).json({
          success: true,
          message: "Posts are found",
          data: reslut
        })
      })
    } catch (err) {

      return res.status(404).json({ message: err.message })

    }
  }
}