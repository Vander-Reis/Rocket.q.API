-- CreateTable
CREATE TABLE "room" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "room" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "questions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "questionId" TEXT NOT NULL,
    CONSTRAINT "questions_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "room" ("room") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "room_room_key" ON "room"("room");
