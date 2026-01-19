const mongoose = require('mongoose');

const itemschema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name the Supplier'],
        trim:true,
        maxlength:[100,'Supplier name exceeded allowed limit']
    },
    contactmail:{
        type:String,
        required:true,

    },
    contactnumber:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports=mongoose.model('Supplier',itemschema)