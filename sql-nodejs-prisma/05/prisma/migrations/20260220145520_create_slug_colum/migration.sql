/*
  Warnings:

  - Made the column `content` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "slug" VARCHAR(255) DEFAULT '',
ALTER COLUMN "content" SET NOT NULL;
