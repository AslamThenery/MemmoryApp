const express = require("express")
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const { connectDB } = require("./db/connection.js")



// IMPORTING ROUTES
const postRoutes = require('./routes/posts.js')



const app = express();

// DATABASE CONNECTION
connectDB()

// ROUTES 
app.use('/posts', postRoutes)

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=> {
    console.log(`Server is connected to localhost: ${PORT}`);
})