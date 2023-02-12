import { prisma } from "../../../../prisma/client";

interface IRequest {
  id: string;
}

export class ListQuestionsUseCase {
  async execute({id}: IRequest) {
    const question = await prisma.$queryRaw`
      SELECT Q.*, Q.read, R.room
	    FROM questions Q
      INNER JOIN room R ON R.room = Q.questionId
	    WHERE Q.questionId = ${id}
      ORDER BY Q.read, Q.created_at;
    `

    return question;
  }
}