import { Room } from '@prisma/client';
import { prisma } from '../../../../prisma/client';

interface IRequest {
  description: string;
  id: string
}

export class CreateQuestionUseCase {
  async execute({ description, id }: IRequest): Promise<Room> {

    const questions = await prisma.room.update({
      where: {
        id,
      },
      data: {
        Questions: {
          create: {
            description,
          }
        }
      }
    });
    return questions;
  }
}