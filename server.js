const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const Db = require('mongodb');
const connect = require('process');
const cors = require('cors')

const authrouter = require("./Route/UserRoute");
const { error } = require('console');
mongoose.connect("mongodb://localhost:27017/StudentDetails", {
    usenewurlparser: true,
    useunifiedtopology: true
});

const db = mongoose.connection;

db.on(error, (err) => {
    console.log(err);
});
db.once("open", () => {
    console.log("Database is connected")
})

const app = express();
app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const Port = 4000;
app.listen(Port, () => {
    console.log(`server is Running ${Port}`);
});
app.use(cors())
app.use("/", authrouter);