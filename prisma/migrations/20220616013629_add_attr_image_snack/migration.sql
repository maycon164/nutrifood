/*
  Warnings:

  - Added the required column `image` to the `snack` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "snack" ADD COLUMN     "image" TEXT NOT NULL;
