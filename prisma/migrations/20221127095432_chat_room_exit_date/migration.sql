/*
  Warnings:

  - You are about to drop the column `isRead` on the `Chat` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Chat" DROP COLUMN "isRead";

-- AlterTable
ALTER TABLE "ChatRoom" ADD COLUMN     "exitDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
