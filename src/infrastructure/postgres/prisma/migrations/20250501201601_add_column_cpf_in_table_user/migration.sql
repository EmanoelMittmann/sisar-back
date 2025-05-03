/*
  Warnings:

  - Added the required column `cpf` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "cpf" TEXT NOT NULL;
