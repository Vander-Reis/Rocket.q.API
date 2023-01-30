import { Request, Response } from "express";
import { CreateQuestionUseCase } from './CreateQuestionUseCase';

export class CreateQuestionController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { description } = request.body;

    const createQuestionUseCase = new CreateQuestionUseCase();

    const question = await createQuestionUseCase.execute({description, id});

    return response.status(201).json(question);
  } 
}