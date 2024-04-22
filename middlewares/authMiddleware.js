import jwt from 'jsonwebtoken';
import { errorHandler } from '../utils/error.js';
import dotenv from 'dotenv';
dotenv.config();

export const authenticateToken = (req, res, next) => {
  console.log('authmiddreq', req.headers);
  const token = req.headers.authorization;
  let secretKey = process.env.JWT_SECRET;

  // console.log(token);
  if (!token) {
    return next(errorHandler(401, 'Unauthorized'));
  }
  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token.' });
  }
};
