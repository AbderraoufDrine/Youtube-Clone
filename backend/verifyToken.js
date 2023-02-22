import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) res.status(403).json("You are not authinticated");

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) res.status(403).json("Token not valid:");
    req.user = user;
    next()
  });
};