import { NextFunction, Response, Request } from "express";

import { check } from "express-validator";
import { validateResult } from "./response";

export const validateCreatedTask = [
  check("title")
    .exists()
    .withMessage("El titulo no puede estar vacio")
    .notEmpty()
    .withMessage("El titulo no puede estar vacio")
    .isString()
    .withMessage("El titulo no puede estar vacio")
    .isLength({ max: 100 })
    .withMessage("La longitud del título debe ser como maximo 100 caracteres"),
  check("description")
    .optional()
    .isString()
    .isLength({ max: 500 })
    .withMessage(
      "La longitud de la descripción debe ser como maximo 500 caracteres"
    ),

  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];
