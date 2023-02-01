import { prisma } from "../../../../prisma/client";

interface IRequest {
  id: string;
}

export class ListQuestionsUseCase {
  async execute({id}: IRequest) {
    const question = await prisma.questions.findMany({
       where: {
        questionId: id
       },
    })

    return question;
  }
}