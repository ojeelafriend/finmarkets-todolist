import { NextFunction, Response, Request } from "express";

import { check } from "express-validator";
import { validateResult } from "./response";

export const validateCreatedTask = [
  check("title")
    .exists()
    .notEmpty()
    .isString()
    .isLength({ max: 100 })
    .withMessage("Se requiere un título válido"),
  check("description")
    .exists()
    .notEmpty()
    .isString()
    .isLength({ max: 500 })
    .withMessage("Se requiere una descripción válida"),

  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];

export const validateUpdatedTaskStatus = [
  check("status")
    .exists()
    .notEmpty()
    .isString()
    .isIn(["pending", "completed"])
    .withMessage("Se requiere un estado válido"),

  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];
