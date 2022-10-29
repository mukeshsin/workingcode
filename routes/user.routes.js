// Import express
import express from "express";
// Import user Controller
import { 
   createuser
 } from "../controllers/user.js";
 
 // Init express router
const router = express.Router();

// Route create a new product
router.post('/users', createuser);

// export router
export default router;