/*
  Warnings:

  - You are about to alter the column `price` on the `service` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "service" ALTER COLUMN "price" SET DATA TYPE INTEGER;
