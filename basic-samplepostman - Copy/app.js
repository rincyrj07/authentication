const express = require("express");
const app = express();
const path = require('path');
const cors = require("cors");

app.use(cors());

app.use("/assets", express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const sampleMiddleware = (req,res,next) => {
    console.log("Middleware");
    next();
}

app.use(sampleMiddleware);

module.exports = app;
