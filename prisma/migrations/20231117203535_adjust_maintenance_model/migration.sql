/*
  Warnings:

  - You are about to drop the column `maintType` on the `Maintenance` table. All the data in the column will be lost.
  - Added the required column `description` to the `Maintenance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Maintenance" DROP COLUMN "maintType",
ADD COLUMN     "description" TEXT NOT NULL;
