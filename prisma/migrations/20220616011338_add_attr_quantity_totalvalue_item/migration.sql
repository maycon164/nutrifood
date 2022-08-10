/*
  Warnings:

  - Added the required column `quantity` to the `item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalValue` to the `item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "item" ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "totalValue" DECIMAL(65,30) NOT NULL;
