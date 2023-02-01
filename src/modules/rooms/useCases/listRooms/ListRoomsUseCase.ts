import { prisma } from "../../../../prisma/client";

interface IRequest {
  room: string;
}

export class ListRoomsUseCase {
  async execute({room}: IRequest) {
    const rooms = await prisma.room.findMany({
      where: {
        room
      },
      include: {
        Questions: true,
      }
    })

    return rooms;
  }
}