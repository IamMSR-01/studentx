import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userID) => {
  const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    sameSite: "Strict",
    secure: true,
  });

  return token;
};

// export default generateTokenAndSetCookie;