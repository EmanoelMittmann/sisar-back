/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `organization` will be added. If there are existing duplicate values, this will fail.
  - Made the column `userId` on table `organization` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "organization" DROP CONSTRAINT "organization_userId_fkey";

-- AlterTable
ALTER TABLE "organization" ALTER COLUMN "userId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "organization_userId_key" ON "organization"("userId");

-- AddForeignKey
ALTER TABLE "organization" ADD CONSTRAINT "organization_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
