import jwt from 'jsonwebtoken';
const secretKey = process.env.SECRET_KEY;

export const userAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if(token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if(err) {
        return res.status(401).send('Unauthorized');
      }
      req.user = decoded;
      next();
    })
  } else {
    res.status(401).send('Unauthorized, Token not available');
  }
}
