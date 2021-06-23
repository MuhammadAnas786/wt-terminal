import mongoose from 'mongoose';
const Float = require('mongoose-float').loadType(mongoose);
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
     
    },

   description: {
      type: String,
     
    },
   
    price: {
      type: Float,
      required: true,
     
    },

   rating:{
       type:Number,
       default:0
   }
  },
  { timestamps: true }
);

export const ProductModel = mongoose.model('products', UserSchema);
