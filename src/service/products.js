import { ProductModel } from '../Data//products';
import { resmessage } from '../Helpers/constants';


export const products = {
  create: async (req) => {
    let data = req.body;

    try {
     

      const ref = new ProductModel({ ...data });

      await ref.save();
     
      return {
        status: 200,
        body: { message: resmessage.record_added, id: ref._id }
      };
    } catch (err) {
      if (err.name === 'ValidationError') {
        return {
          status: 400,
          body: {
            message: resmessage.mongodb_validation_err,
            error: err
          }
        };
      }
      return {
        status: 400,
        body: { message: resmessage.something_wrong, err }
      };
    }
  },
 get: async (req) => {
    try {

    //   const { email, password } = req;
      const record = await ProductModel.find({ });
      // console.log(validate_user)
      return {
        status: 200,
        body: {
          message: resmessage.record_exists,
          data:record
        }
    }
    } catch (err) {
      // console.log(err)
      return {
        status: 400,
        body: {
          message: resmessage.something_wrong,
          error: err.message
        }
      };
    }
  }
};
