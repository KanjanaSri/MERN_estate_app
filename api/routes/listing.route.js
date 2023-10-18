import express from "express";
import {
  getListing,
  createListing,
  deleteListing,
  updateListing,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/get/:id", getListing);
router.post("/create", verifyToken, createListing);
router.post("/update/:id", verifyToken, updateListing);
router.delete("/delete/:id", verifyToken, deleteListing);

export default router;
