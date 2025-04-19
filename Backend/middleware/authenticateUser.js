import jwt from "jsonwebtoken"

const authenticateUser = (req, res, next) => {
  const authHeader = req.cookies.token || req.headers.authorization;

  

  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }



  try {
    const decoded = jwt.verify(authHeader, process.env.JWT_SECRET);
    req.user = decoded; // Save user data to request
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

export default authenticateUser;