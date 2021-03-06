require('./connection/dbConn')();
const express = require("express");
const cors = require('cors');
require('dotenv').config();

const app = express()
const port = process.env.PORT || 3333


app.use(cors());
app.use(express.urlencoded({ extended: true }));
//intitializing body parser
app.use(express.json())

// connecting to database 

app.use("/api/product", require("./routes/product.route")(express));

require('./controller/expiry.tracker.controller')();
app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})

