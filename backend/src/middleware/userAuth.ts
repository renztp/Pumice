import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
const secretKey = process.env.SECRET_KEY;

export const isUserAuthenticated = (req, res, next) => {
  const token = req.cookies.jwt;
  if(token) {
    jwt.verify(token, secretKey, async (err, decoded) => {
      if(err) {
        return res.status(401).send('Unauthorized');
      }
      req.user = await User.findById(decoded.id);
      next();
    })
  } else {
    res.status(401).send('Unauthorized, Token not available');
  }
}
