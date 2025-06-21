-- CreateEnum
CREATE TYPE "TypeOrder" AS ENUM ('SIGNATURE', 'CHARGE');

-- CreateTable
CREATE TABLE "customer_asaas" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "customer_asaas_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customer_asaas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders_asaas" (
    "id" SERIAL NOT NULL,
    "customer_asaas_id" INTEGER NOT NULL,
    "type_order" "TypeOrder" NOT NULL DEFAULT 'CHARGE',
    "transaction_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_asaas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payments_exceptions" (
    "id" SERIAL NOT NULL,
    "transaction_id" INTEGER NOT NULL,
    "reason" JSON NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payments_exceptions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customer_asaas_user_id_key" ON "customer_asaas"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "customer_asaas_customer_asaas_id_key" ON "customer_asaas"("customer_asaas_id");

-- CreateIndex
CREATE UNIQUE INDEX "orders_asaas_transaction_id_key" ON "orders_asaas"("transaction_id");

-- CreateIndex
CREATE UNIQUE INDEX "payments_exceptions_transaction_id_key" ON "payments_exceptions"("transaction_id");

-- AddForeignKey
ALTER TABLE "customer_asaas" ADD CONSTRAINT "customer_asaas_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders_asaas" ADD CONSTRAINT "orders_asaas_customer_asaas_id_fkey" FOREIGN KEY ("customer_asaas_id") REFERENCES "customer_asaas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments_exceptions" ADD CONSTRAINT "payments_exceptions_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "orders_asaas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
