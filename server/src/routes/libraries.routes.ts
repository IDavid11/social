import { Router } from "express";
import { librariesController } from "../controllers/libraries.controller";
import { TokenValidation } from "../middlewares/verifyToken";

const router: Router = Router();

router.get("/", librariesController.getLibraries);
router.get("/books", librariesController.getLibrariesBooks);
router.get("/:id", librariesController.getLibrary);

export default router;
