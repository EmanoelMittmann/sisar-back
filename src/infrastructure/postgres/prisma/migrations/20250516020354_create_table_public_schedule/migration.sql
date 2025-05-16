-- AlterTable
ALTER TABLE "schedule" ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- CreateTable
CREATE TABLE "public_schedule" (
    "id" SERIAL NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "contract_at" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "organizationId" INTEGER NOT NULL,
    "status" "StatusSchedules" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "public_schedule_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public_schedule" ADD CONSTRAINT "public_schedule_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public_schedule" ADD CONSTRAINT "public_schedule_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
