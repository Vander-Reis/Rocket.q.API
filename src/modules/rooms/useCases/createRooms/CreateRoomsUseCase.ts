import { prisma } from '../../../../prisma/client';
import generateRoom from '../../../../utils/generateRoom';
import { Room } from '@prisma/client';

interface IRequest {
  password: string;
}

export class CreateRoomsUseCase {
  async execute({ password }: IRequest): Promise<Room> {

    const room = await prisma.room.create({
      data: {
        room: generateRoom,
        password: password,
        created_at: new Date()
      },
    });
    return room;
  }
}