import { prisma } from "../../../../prisma/client";

export class ListRoomsUseCase {
  async execute() {
    const room = await prisma.room.findMany({
      include: {
        Questions: true,
      }
    })

    return room;
  }
}