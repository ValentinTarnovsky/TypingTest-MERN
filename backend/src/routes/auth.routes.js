import express from "express";
import { login, signup, logout, profile } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from '../middlewares/validator.middleware.js';
import { signupSchema, loginSchema } from '../schemas/auth.schema.js';

const router = express.Router();

router.post("/signup", validateSchema(signupSchema), signup);

router.post("/login", validateSchema(loginSchema), login);

router.post("/logout", logout);

router.get("/profile", authRequired, profile);

export default router;