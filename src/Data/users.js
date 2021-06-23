import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    fullname: {
      type: String,
     
    },

    email: {
      type: String,
      unique: true,
      required: true
    },
   
    password: {
      type: String,
      required: true,
      trim: true
    },

    gender: {
      type: String,
      required: true,
      enum: ['male', 'female', 'others'],
      default: 'male'
    }
  },
  { timestamps: true }
);

export const UserModel = mongoose.model('users', UserSchema);
