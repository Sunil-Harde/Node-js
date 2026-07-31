import { body } from "express-validator"

console.log("userValidator is running");

export const userValidator = [
    body("name") 
        .notEmpty().withMessage("name is require")
        .trim(),

    body("number")
        .notEmpty().withMessage("number is require")
        .trim(),

    body("email")
        .notEmpty().withMessage("email is require")
        .trim().isEmail().withMessage("email is require"),

    body("password")
        .notEmpty().withMessage("password is require")
        .trim(),

]