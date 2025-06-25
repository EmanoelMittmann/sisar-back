/*
  Warnings:

  - You are about to drop the column `transaction_id` on the `payments_exceptions` table. All the data in the column will be lost.
  - You are about to drop the `orders_asaas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "orders_asaas" DROP CONSTRAINT "orders_asaas_customer_asaas_id_fkey";

-- DropForeignKey
ALTER TABLE "payments_exceptions" DROP CONSTRAINT "payments_exceptions_transaction_id_fkey";

-- DropIndex
DROP INDEX "payments_exceptions_transaction_id_key";

-- AlterTable
ALTER TABLE "payments_exceptions" DROP COLUMN "transaction_id";

-- DropTable
DROP TABLE "orders_asaas";

-- CreateTable
CREATE TABLE "organization_asaas_account" (
    "id" SERIAL NOT NULL,
    "organizationId" INTEGER NOT NULL,
    "account_asaas_id" TEXT NOT NULL,
    "api_key" TEXT NOT NULL,
    "wallet_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "organization_asaas_account_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "organization_asaas_account" ADD CONSTRAINT "organization_asaas_account_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
