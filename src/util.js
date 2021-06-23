import jwt from 'jsonwebtoken';
import * as crypto from 'crypto';
import * as constants from 'constants';

const jwt_key = 'KOidFxnBUFjFbtRKPMkwGeiT5r8sgjXQWAMCNMQlV';
require('dotenv').config();


export const GenToken = (userId, email) => {
  const expiresIn = 30 * 24 * 24;
  const dataStoredInToken = {
    userId,
    email
  };
  const token = jwt.sign(dataStoredInToken, jwt_key, {
    expiresIn,
    algorithm: 'HS512',
    issuer: 'anasikram',
    noTimestamp: true
  });
  const accessToken = `Bearer ${token}`;
  console.log(`JWT_TOKEN_CREATED | ${userId} | ${email} |${accessToken}`);
  return { expiresIn, accessToken, token };
};


