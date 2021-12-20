
import ResponseHandler from '../../common/ResponseHandler';
import jwtSecret from '../../../config/auth';
import jwt from 'jsonwebtoken';

export default function (req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new Error('No token provided.');
    }

    const parts = authHeader.split(' ');

    if (!parts.length == 2) {
      throw new Error('Token contains more than two parts.');
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      throw new Error('Poorly formatted token.');
    }

    jwt.verify(token, jwtSecret.secret, (err, decoded) => {
      if (err) throw new Error('Failed to authenticate token.');
      req.loggedUser = decoded.userEmail;
      next();
    });
  } catch(error) {  
    ResponseHandler.error(res, error);
  }
};
