import { Router } from "express";
import {login, refreshAccessToken, registerUser, logoutUser, forgotPasswordRequest, resetForgotPassword, changeCurrntPassword, getCurrentUser, resendEmailVerification, verifyEmail} from "../controllers/auth.controllers.js"
import { validate } from "../middlewares/validator.middleware.js";

import { userChangeCurrentPasswordValidator, userForgotPasswordValidator, userLoginValidator, userRegisterValidator, userResetForgotPasswordVaidator } from "../validators/index.js";

import {verifyJWT} from '../middlewares/auth.middleware.js';

const router = Router();

router.route("/register").post(userRegisterValidator(), validate, registerUser)
router.route("/login").post(userLoginValidator(), validate, login)

router
    .route("/verify-email/:verificationToken")
    .get(verifyEmail);
router
    .route("/refresh-token")
    .post(refreshAccessToken);

router  
    .route("/forgot-password")
    .post(userForgotPasswordValidator(), validate , forgotPasswordRequest)

router
    .route("/reset-password/:resetToken")
    .post(userResetForgotPasswordVaidator() , validate , resetForgotPassword)

// secure routes
router.route("login").post(verifyJWT, logoutUser);
router.route("/current-user").post(verifyJWT, getCurrentUser)
router.route("/change-password").post(verifyJWT, userChangeCurrentPasswordValidator(), validate, changeCurrntPassword)
router.route("/resend-email-verification").post(verifyJWT, resendEmailVerification)

export default router;
