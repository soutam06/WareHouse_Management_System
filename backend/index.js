
require('dotenv').config();


const express = require("express");
const cors = require("cors");

const godownroute = require('./routes/godownroute');
const itemsroute = require('./routes/itemsroute')




const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.use(cors());

app.use("/",godownroute);
app.use("/",itemsroute);





const connectDB = require("./db/connection");

connectDB();

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});




