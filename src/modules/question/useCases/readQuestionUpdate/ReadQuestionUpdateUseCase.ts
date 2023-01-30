import { prisma } from "../../../../prisma/client";

interface IRequest {
  id: string;
}

export class ReadQuestionUpdateUseCase {
  async execute({id}: IRequest):Promise<void> {
    await prisma.questions.update({
      where: {
        id
      },
      data: {
        read: true,
      }
    })
  }
}