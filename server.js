import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import useragent from 'express-useragent';
import routes from './src/routes/index';
import { options, mongodbURI } from './src/config';
const express = require('express');
// var usersRouter = require('./routes/users');

const app = express();
app.use(cors());

mongoose
  .connect(mongodbURI, options)
  .then(() => {
    console.log('Connected to DB');
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    app.set('trust proxy', true);
    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
      );
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, Accept, Content-Type, Authorization'
      );
      if (req.method === 'OPTIONS') {
        return res.status(200).end();
      }
      next();
    });
    app.use(useragent.express());

    app.use('/api/v1', routes, cors());

    app.use(express.static("client"));

    app.get("*", (req, res) =>
      res.sendFile(path.resolve(__dirname, "client", "index.html"))
    );
    // error handler
    app.use((req, res) => {
      res.status(404).json({
        message: ['Request resource not found.'],
        url: req.originalUrl
      });
    });

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Error Connecting Database... ${err}`);
  });
