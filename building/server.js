const UPLOADS = __dirname+'/uploads';
require('./connection/dbConn')();
const express = require("express");
const cors = require('cors');
require('dotenv').config();

const app = express()
const port = process.env.PORT || 7777


app.use(cors());
app.use(express.urlencoded({ extended: true }));
//intitializing body parser
app.use(express.json())

// connecting to database 

app.use("/api/building", require("./routes/building.route")(express,UPLOADS));


app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})

