import { Router } from "express";
import * as authController from "../controllers/auth.controller";
import { storage } from "../libs/multer";

const router: Router = Router();

router.post("/login", authController.signin);
router.post("/register", authController.signup);
router.post("/register/library", storage.single("image"), authController.signupLibrary);

export default router;
