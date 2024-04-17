import jwt from 'jsonwebtoken';
import { errorHandler } from '../utils/error.js';

// export const authenticateToken = (req, res, next) => {
//   console.log(req);
//   const token = req.cookies.access_token;
//   console.log(token);
//   if (!token) {
//     return next(errorHandler(401, 'Unauthorized'));
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
//     if (err) {
//       return next(errorHandler(403, 'Invalid token'));
//     }
//     req.decodedToken = decodedToken;
//     next();
//   });
// };

export const authenticateToken = (req, res, next) => {
  console.log(req.headers.authorization);
  const token = req.headers.authorization;
  console.log(token);
  if (!token) {
    return next(errorHandler(401, 'Unauthorized'));
  }
  try {
    // Verify token
    const decoded = jwt.verify(token, 'secret');
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token.' });
  }
};
