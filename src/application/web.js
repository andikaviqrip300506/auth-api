import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { publicRouter } from "../routes/public-api.js";
import { errorMiddleware } from "../middlewares/error-middleware.js";

const web = express();
web.use(cors());

web.use(bodyParser.urlencoded({ extended: true }));
web.use(bodyParser.json());

web.use(publicRouter);
web.use(errorMiddleware);

export { web }