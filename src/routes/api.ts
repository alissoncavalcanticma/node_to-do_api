import { Router } from "express";
import * as To_do_Controller from '../controllers/To_do.Controller';

const router = Router();

router.get("/", To_do_Controller.home);

export default router;