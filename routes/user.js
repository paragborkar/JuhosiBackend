import express from "express";
import {login , getDetails} from "../controllers/userControllers.js";

const router=express.Router();

router.post('/login', login);
router.post('/details', getDetails);

export default router;