import { body } from "express-validator";


const userRegisterValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty()
            .withMessage("Email is reqiured!")
            .isEmail()
            .withMessage("Emial is invalid")
            ,
        body("username")
            .trim()
            .notEmpty()
            .withMessage("User-name is required")
            .isLowercase()
            .withMessage("username must be in lowercase")
            .isLength({min: 3})
            .withMessage("Username must be at least 3 characters long")
            ,
        body("password")
            .trim()
            .isEmpty()
            .withMessage("Password is required!")
            ,
        body("fullname")
            .optional()
            .trim()
            .isEmpty()
    ]
}


const userLoginValidator = () => {
    return (
        body("email")
            .optional()
            .isEmail()
            .withMessage("Email is invalid"),
        
            body("password")
                .notEmpty()
                .withMessage("Password is required.")
    )
}
export {
    userRegisterValidator,
    userLoginValidator
}