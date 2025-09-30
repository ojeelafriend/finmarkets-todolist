import { NextFunction, Response, Request } from "express";
import { validationResult } from "express-validator";

export const validateResult = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (err: any) {
    res.status(400);
    res.send({
      ok: false,
      error: err.array()[0].msg,
    });
  }
};
