-- DropIndex
DROP INDEX "orders_asaas_transaction_id_key";

-- AlterTable
ALTER TABLE "orders_asaas" ALTER COLUMN "transaction_id" SET DATA TYPE TEXT;
