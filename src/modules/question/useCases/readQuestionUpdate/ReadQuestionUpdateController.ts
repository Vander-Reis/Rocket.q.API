import { Request, Response } from "express";
import { ReadQuestionUpdateUseCase } from './ReadQuestionUpdateUseCase';

export class ReadQuestionUpdateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const readQuestionUpdateUseCase = new ReadQuestionUpdateUseCase();
    await readQuestionUpdateUseCase.execute({id});
    return response.send();
  }
}