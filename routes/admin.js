import express from "express";
import {getAdminDetails} from "../controllers/adminControllers.js";

const router=express.Router();

router.get('/adminDetails', getAdminDetails);


export default router;