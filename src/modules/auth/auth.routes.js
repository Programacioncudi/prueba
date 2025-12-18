// src/modules/auth/auth.routes.js
import { Router } from "express";
import { authRequired } from "../../middleware/auth.middleware.js";
import { login, register, refreshToken, me } from "./auth.controller.js";

const router = Router();

// Podés desactivar /register en producción y dejar solo login.
router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refreshToken);
router.get("/me", authRequired, me);

export default router;
