import express, { Application } from "express";
import cors from "cors";
import { createRoles } from "./libs/initialSetup";
import BooksRoutes from "./routes/books.routes";
import UsersRoutes from "./routes/users.routes";
import LibrariesRoutes from "./routes/libraries.routes";
import AuthRoutes from "./routes/auth.routes";
import ModeratorRoutes from "./routes/moderator.routes";
import path from "path";
import cookieParser from "cookie-parser";
import "./database";

import morgan from "morgan";

const app: Application = express();
createRoles();

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:8080",
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));

// Routes

app.use("/books", BooksRoutes);
app.use("/user", UsersRoutes);
app.use("/libraries", LibrariesRoutes);
app.use("/auth", AuthRoutes);
app.use("/moderator", ModeratorRoutes);

// Static files
app.use("/uploads", express.static(path.resolve("../uploads")));

// Running server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

export default app;
