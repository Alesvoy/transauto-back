/*
  Warnings:

  - You are about to drop the column `tripType` on the `Trip` table. All the data in the column will be lost.
  - Added the required column `destination` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `origin` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trip" DROP COLUMN "tripType",
ADD COLUMN     "destination" TEXT NOT NULL,
ADD COLUMN     "origin" TEXT NOT NULL,
ADD COLUMN     "product" TEXT NOT NULL;
