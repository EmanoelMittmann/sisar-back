-- CreateEnum
CREATE TYPE "StatusSchedules" AS ENUM ('PENDING', 'FINISH', 'NOT_PAY', 'CANCELED');

-- CreateTable
CREATE TABLE "schedule" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "organizationId" INTEGER NOT NULL,
    "contract_at" TIMESTAMP(3) NOT NULL,
    "status" "StatusSchedules" NOT NULL,
    "remember_user" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "canceled_at" TIMESTAMP(3),

    CONSTRAINT "schedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "schedule_uuid_key" ON "schedule"("uuid");

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;
