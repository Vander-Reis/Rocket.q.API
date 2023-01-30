import { Request, Response } from "express";
import { DeleteQuestionUseCase } from './DeleteQuestionUseCase';


export class DeleteQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteQuestionUseCase = new DeleteQuestionUseCase();

    await deleteQuestionUseCase.execute({id})

    return response.send();
  } 
}