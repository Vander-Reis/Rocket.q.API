import { prisma } from "../../../../prisma/client";

interface IRequest {
  id: string;
}

export class DeleteQuestionUseCase {
  async execute({ id }: IRequest):Promise<void> {
    await prisma.questions.delete({
      where: {
        id
      }
    })
  }
}