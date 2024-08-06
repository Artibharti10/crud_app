const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productRoute = require("./routes/product.route.js")


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products",productRoute);

mongoose.connect('mongodb://localhost:27017').then(() => {
    console.log("db connect");
})
.catch(() => {
    console.log("connection failed");
});

app.listen(3000,() => {
    console.log("server is runing on port 3000");
})