import express from "express";
import * as postController from "../controllers/postController";
import asyncHandler from "../middlewares/asyncHandler";

const router = express.Router();

// Routes
router.get("/", asyncHandler(postController.getPosts));
router.post("/", asyncHandler(postController.createPost));

export default router;
