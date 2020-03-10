import express from "express";
import routes from "../routes";
import { editVideo, deleteVideo, upload, videoDetail } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.upload, upload);

export default videoRouter;