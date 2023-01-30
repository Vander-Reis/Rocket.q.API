import { Router } from "express";

import { roomRoutes } from "./room.routes";
import { questionRoutes } from "./question.routes";

const routes = Router();

routes.use("/room", roomRoutes);
routes.use("/question", questionRoutes);

export { routes };