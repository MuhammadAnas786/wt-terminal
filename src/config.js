require('dotenv').config();

export const mongodbURI =
  'mongodb+srv://admin:dKoQvjkNyMNhRfEM@cluster0.tknaz.mongodb.net/shop?retryWrites=true&w=majority';
export const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false,
  poolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000
};

