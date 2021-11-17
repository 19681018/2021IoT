"use strict"
const express = require("express");
const app = express();
const port = process.env.port || 5455;
const things = require("./things"); 
const welcome = require("./welcome");

app.use(express.json());
app.use("/things", things);
app.use("/welcome", welcome);

app.get("/", (req, res) => {
    res.send("Server is now running in Port 5455");
});

app
    .route("/welcome")
    .get((req, res)=>{
        res.send("This Page is Help Center. What can we help you?");
        //KR to EN Translated
    });

app
    .route("/things/cars")
    .get((req,res)=>{})
    .post((req, res)=>{});

app
    .route("/things/cars/:carid")
    .get((req, res)=>{})
    .put((req, res)=>{});

app.listen(port ,err => {
    if (err) {
        return console.log("ERROR", err);
    }
    console.log(`Listening on port ${port}`);
});
