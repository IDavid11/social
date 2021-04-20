import { Router } from "express";
import * as moderatorController from "../controllers/moderator.controller";
import { TokenValidation } from "../middlewares/verifyToken";

const router: Router = Router();

router.put("/publish/:id", moderatorController.updateBook);
router.get("/reports", moderatorController.getReports);
router.get("/reports/:id", moderatorController.getReport);

export default router;
