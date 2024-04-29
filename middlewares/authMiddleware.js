import jwt from 'jsonwebtoken';
import { errorHandler } from '../utils/error.js';
import dotenv from 'dotenv';
dotenv.config();

export const authenticateToken = (req, res, next) => {
  const token = req.headers.token;
  let secretKey = process.env.JWT_SECRET;

  if (!token) {
    return next(errorHandler(401, 'Unauthorized'));
  }
  try {
    const token1 = token.split(' ')[1];

    const decoded = jwt.verify(token1, secretKey);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token.' });
  }
};
