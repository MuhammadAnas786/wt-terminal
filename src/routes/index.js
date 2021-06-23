import express from 'express';
import userController from '../controllers/userController';
import productController from '../controllers/productController'
import { register, login } from '../apiSchema/users';
import { Add } from '../apiSchema/products'
import { ValidateApiSchema,isAuth } from '../Helpers/middlewares'

const routes = express.Router();

/* GET home page. */

routes.post('/register', ValidateApiSchema(register), userController.register);
routes.post('/login', ValidateApiSchema(login), userController.login);

routes.get('/get',productController.get);
routes.post('/Add',isAuth,ValidateApiSchema(Add) ,  productController.Add);
routes.put('/edit/:id',  productController.edit);




export default routes;
