const mongoose = require('mongoose');

const itemschema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name the Item'],
        trim:true,
        maxlength:[100,'Item exceeded allowed limit']
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:[true,"No price enlisted"],
        min:[0,'Price cannot be negative']
    },
    quantity:{
        type:Number,
        require:true,
        min:[0,'Quantity cannot be negative']
    },
    categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'Category is required']
  },
    supplier:{
        type:String,
        required:true,
        trim:true

    },
    supplyprice:{
        type:Number,
        required:true,
    }   ,

   createdAt:{
        type: Date,
        default: Date.now
    }
})


module.exports=mongoose.model('Item',itemschema)

