import express from "express";
import { SubmitFeedbackController } from "./controllers/submit-feedback-controlle";

export const routes = express.Router();

routes.route("/feedbacks").post(new SubmitFeedbackController().handle);
