import { Request, Response } from "express";
import { ListRoomsUseCase } from './ListRoomsUseCase';

export class ListRoomsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listRoomsUseCase = new ListRoomsUseCase();

    const room = await listRoomsUseCase.execute();

    return response.json(room);
  }
}