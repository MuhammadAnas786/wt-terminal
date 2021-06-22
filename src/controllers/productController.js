import { products } from '../service/products';
import { response } from './response';

const productController = {
  Add: async (req, res) => {
    const result = await products.create(req);
    console.log(result);
    return response(res, result.status, result.body);
  },

  get: async (req, res) => {
    const result = await products.get(req.body);
    return response(res, result.status, result.body);
  },
  edit: async (req, res) => {
    console.log(req.params.id)
    const result = await products.edit(req);
    console.log(result);
    return response(res, result.status, result.body);
  }
};
export default productController;
