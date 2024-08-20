/*
  Warnings:

  - You are about to drop the column `userId` on the `client` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[clientId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clientId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `client` DROP FOREIGN KEY `Client_userId_fkey`;

-- AlterTable
ALTER TABLE `client` DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `clientId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_clientId_key` ON `User`(`clientId`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
