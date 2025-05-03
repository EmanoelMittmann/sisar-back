-- CreateTable
CREATE TABLE "organization" (
    "id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "social_name" VARCHAR(100) NOT NULL,
    "fantasy_name" VARCHAR(120) NOT NULL,
    "cnpj" VARCHAR(14) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(15) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "office" VARCHAR(200) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "inactive_at" TIMESTAMP(3),
    "userId" INTEGER,

    CONSTRAINT "organization_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "organization_uuid_key" ON "organization"("uuid");

-- AddForeignKey
ALTER TABLE "organization" ADD CONSTRAINT "organization_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
