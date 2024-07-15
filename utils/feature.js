import jwt from "jsonwebtoken";

export const sendCookie = (user, res, message, statusCode = 200) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 15,
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none", // Add this line
      secure: process.env.NODE_ENV === "Development" ? false : true, // Add this line
    })
    .json({ success: true, msg: message });
};
