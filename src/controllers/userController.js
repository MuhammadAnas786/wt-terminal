import { user } from '../service/user';
import { response } from './response';

const userController = {
  register: async (req, res) => {
    const result = await user.create(req);
    console.log(result);
    return response(res, result.status, result.body);
  },

  login: async (req, res) => {
    const result = await user.login(req.body);
    return response(res, result.status, result.body);
  }
};
export default userController;
