import { Request, Response } from "express";
import { ListRoomsUseCase } from './ListRoomsUseCase';

export class ListRoomsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { room } = request.params;
    const listRoomsUseCase = new ListRoomsUseCase();

    const rooms = await listRoomsUseCase.execute({room});

    return response.json(rooms);
  }
}