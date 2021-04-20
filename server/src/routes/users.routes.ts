import { Router } from "express";
import { usersController } from "../controllers/users.controller";
import { TokenValidation } from "../middlewares/verifyToken";
import { storage } from "../libs/multer";

const router: Router = Router();

router.get("/", usersController.getUsers);
router.get("/profile", TokenValidation, usersController.profile);
router.put("/profile", TokenValidation, usersController.updateUser);
router.put("/profile/image", storage.single("image"), TokenValidation, usersController.updateUserImage);

router.post("/profile/shipping-address", TokenValidation, usersController.addUserShippingAddress);
router.put("/profile/shipping-address/:id", TokenValidation, usersController.updateUserShippingAddress);
router.get("/profile/shipping-address/:id", TokenValidation, usersController.getUserShippingAddress);

export default router;
