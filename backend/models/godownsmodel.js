const mongoose = require('mongoose')

const godownSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    parent_godown:{
        type:String,
        required:false
    },
    children:{
        type:Array,
        required:false
    }
})

const Godown = mongoose.model("godown",godownSchema);

module.exports = Godown;


