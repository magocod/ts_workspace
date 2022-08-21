import { example } from "../controllers/example.controller";
import { Router } from "express";

const router = Router();

router.get("/example", example);

export default router;
