/*
  Warnings:

  - You are about to alter the column `cpf` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(30)`.

*/
-- AlterTable
ALTER TABLE "user" ALTER COLUMN "cpf" SET DATA TYPE VARCHAR(30);
