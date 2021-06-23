import Joi from 'joi';

export const register = Joi.object({
  password: Joi.string().required(),

  repeat_password: Joi.ref('password'),
  fullname: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
 gender: Joi.string().required()
});

export const login = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password: Joi.string().required()
});
