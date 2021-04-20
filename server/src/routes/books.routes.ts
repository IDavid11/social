import { Router } from "express";
import { booksController } from "../controllers/book_controllers/books.controller";
import { addBook } from "../controllers/book_controllers/addBook.controller";
import { TokenValidation } from "../middlewares/verifyToken";
import { LibraryRoleValidation, ModeratorRoleValidation } from "../middlewares/verifyRole";
import { storage } from "../libs/multer";

const router: Router = Router();

router.get("/", booksController.getBooks);
router.get("/:id", booksController.getBook);

router.post("/add", storage.single("image"), TokenValidation, LibraryRoleValidation, addBook);
router.put(
  "/:id",
  TokenValidation,
  LibraryRoleValidation,
  ModeratorRoleValidation,
  booksController.updateBook
);
router.delete(
  "/:id",
  TokenValidation,
  LibraryRoleValidation,
  ModeratorRoleValidation,
  booksController.deleteBook
);

router.post("/:id/wanted", TokenValidation, booksController.wantList);
router.post("/:id/cart", TokenValidation, booksController.cartList);
router.post("/:id/buyed", TokenValidation, booksController.boughtList);

export default router;
