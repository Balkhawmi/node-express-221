/*
  Warnings:

  - You are about to drop the column `mail` on the `client` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `client` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Client_mail_key` ON `client`;

-- AlterTable
ALTER TABLE `client` DROP COLUMN `mail`,
    DROP COLUMN `password`;
