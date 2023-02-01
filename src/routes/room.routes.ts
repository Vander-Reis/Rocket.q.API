import { Router } from "express";
import { CreateRoomsController } from '../modules/rooms/useCases/createRooms/CreateRoomsController';
import { ListRoomsController } from '../modules/rooms/useCases/listRooms/ListRoomsController';

const createRoomsController = new CreateRoomsController();
const listRoomsController = new ListRoomsController();

const roomRoutes = Router();

roomRoutes.post("/", createRoomsController.handle);
roomRoutes.get("/:room", listRoomsController.handle);

export { roomRoutes };