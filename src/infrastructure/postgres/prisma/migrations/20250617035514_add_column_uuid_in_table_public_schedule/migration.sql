/*
  Warnings:

  - A unique constraint covering the columns `[uuid]` on the table `public_schedule` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public_schedule" ADD COLUMN     "uuid" UUID;

-- CreateIndex
CREATE UNIQUE INDEX "public_schedule_uuid_key" ON "public_schedule"("uuid");
