-- DropForeignKey
ALTER TABLE "item" DROP CONSTRAINT "item_snackId_fkey";

-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_userId_fkey";

-- AlterTable
ALTER TABLE "item" ALTER COLUMN "snackId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_snackId_fkey" FOREIGN KEY ("snackId") REFERENCES "snack"("id") ON DELETE SET NULL ON UPDATE CASCADE;
