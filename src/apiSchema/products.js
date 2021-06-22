import Joi from 'joi';

export const Add = Joi.object({
  name: Joi.string().required(),

  description: Joi.string().min(9).required(),
  price: Joi.number().required(),
  rating: Joi.number()
});
