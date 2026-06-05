import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User, { IUser } from "../models/User.js";

export interface AuthenticatedRequest extends Request {
  user?: IUser | null;
}

export const isAuth = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    // Check auth header
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({
        message: "Please Login - No auth header",
      });
      return;
    }

    // Extract token
    const token = authHeader.split(" ")[1];

    if (!token) {
      res.status(401).json({
        message: "Please Login - Token missing",
      });
      return;
    }

    // Verify token
    const decodedData = jwt.verify(
      token,
      process.env.JWT_SEC as string
    ) as JwtPayload;

    // Check decoded data
    if (!decodedData || !decodedData._id) {
      res.status(401).json({
        message: "Invalid token",
      });
      return;
    }

    // Find user
    const user = await User.findById(decodedData._id);

    if (!user) {
      res.status(401).json({
        message: "User not found / Token expired",
      });
      return;
    }

    // Attach user to request
    req.user = user;

    next();
  } catch (error: any) {
    console.log(error.message);

    res.status(401).json({
      message: "Please Login",
    });
  }
};