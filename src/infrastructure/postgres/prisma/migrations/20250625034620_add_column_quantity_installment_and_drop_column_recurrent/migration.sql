/*
  Warnings:

  - You are about to drop the column `recurrent` on the `plan` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[organizationId]` on the table `organization_asaas_account` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `quantity_installment` to the `plan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "organization_asaas_account" DROP CONSTRAINT "organization_asaas_account_organizationId_fkey";

-- AlterTable
ALTER TABLE "plan" DROP COLUMN "recurrent",
ADD COLUMN     "quantity_installment" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "Recurrent";

-- CreateIndex
CREATE UNIQUE INDEX "organization_asaas_account_organizationId_key" ON "organization_asaas_account"("organizationId");

-- AddForeignKey
ALTER TABLE "organization_asaas_account" ADD CONSTRAINT "organization_asaas_account_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
