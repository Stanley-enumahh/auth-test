import express from "express";
import { getAllPosts } from "../controllers/postController.js";
import authMiddleware from "../middlewares/auth.js";
import pagination from "../middlewares/pagination.js";

const route = express.Router();

route.use(authMiddleware);

route.get("/", pagination, getAllPosts);

export default route;
