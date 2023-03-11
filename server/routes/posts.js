const express = require('express')

// IMPORTING CONTRLLERS

const postController = require("../controller/postContrller")


const router = express.Router()

router.get('/', postController.create)
router.get('/posts', postController.getPosts)





module.exports = router;