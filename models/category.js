const mongoose = require('mongoose');
const categoryschema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
        unique:true,
        trim:true,
        maxlength:[200,'Word exceeded allowed limit']
    },
    description:{
        type:String,
        required:true,
        maxlength:[200,'Description exceeded allowed limit']
    },
    createdAt:{
        timestamps:true,
        type:Date
    }
})

module.exports =mongoose.model('Category',categoryschema)