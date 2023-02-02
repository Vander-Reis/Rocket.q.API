import { prisma } from '../../../../prisma/client';
import { Room } from '@prisma/client';
import { generateRandomRoom } from '../../../../utils/generateRoom';

interface IRequest {
  password: string;
}

export class CreateRoomsUseCase {
  async execute({ password }: IRequest): Promise<Room> {

    const roomRandom = generateRandomRoom()

    const rooms = await prisma.room.create({
      data: {
        room: roomRandom,
        password: password,
        created_at: new Date()
      },
    });
    return rooms;
  }
}