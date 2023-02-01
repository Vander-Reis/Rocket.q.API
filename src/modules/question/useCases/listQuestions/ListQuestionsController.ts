import { Request, Response } from "express";
import { ListQuestionsUseCase } from './ListQuestionsUseCase';

export class ListQuestionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const listQuestionsUseCase = new ListQuestionsUseCase();

    const rooms = await listQuestionsUseCase.execute({id});

    return response.json(rooms);
  }
}