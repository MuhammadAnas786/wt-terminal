import Joi from 'joi';

export const Add = Joi.object({
  name: Joi.string().required(),

  description: Joi.string().required(),
  price: Joi.number().required()
}).unknown(true);
