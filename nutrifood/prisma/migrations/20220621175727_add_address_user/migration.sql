-- DropForeignKey
ALTER TABLE "address" DROP CONSTRAINT "address_userId_fkey";

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "address" TEXT,
ADD COLUMN     "num" INTEGER;
