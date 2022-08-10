-- DropForeignKey
ALTER TABLE "item" DROP CONSTRAINT "item_snackId_fkey";

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_snackId_fkey" FOREIGN KEY ("snackId") REFERENCES "snack"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;
