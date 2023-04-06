import { Router } from "express";
import { getWeatherReport } from "../controllers/weather.controllers";
const router = Router();

router.get("/weather",getWeatherReport);

export default router;