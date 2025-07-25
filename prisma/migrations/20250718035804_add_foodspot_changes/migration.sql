/*
  Warnings:

  - You are about to drop the column `ownerId` on the `FoodSpot` table. All the data in the column will be lost.
  - Added the required column `userId` to the `FoodSpot` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FoodSpot" DROP CONSTRAINT "FoodSpot_ownerId_fkey";

-- AlterTable
ALTER TABLE "FoodSpot" DROP COLUMN "ownerId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "FoodSpot" ADD CONSTRAINT "FoodSpot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
