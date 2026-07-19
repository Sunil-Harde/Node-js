import { body } from "express-validator"

const createProductValidator = [

    body("name")
        .notEmpty().withMessage("name is require")
        .trim(),

    body("number")
        .notEmpty().withMessage("name is require")
        .trim()
        .isInt().withMessage("number require")
        .isLength({ min: 10, max: 10 }).withMessage("only 10 number require"),


]


export default createProductValidator