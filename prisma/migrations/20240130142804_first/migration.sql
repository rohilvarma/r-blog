-- CreateTable
CREATE TABLE "BlogCard" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "BlogCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "tagName" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BlogCardToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BlogCardToTag_AB_unique" ON "_BlogCardToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_BlogCardToTag_B_index" ON "_BlogCardToTag"("B");

-- AddForeignKey
ALTER TABLE "_BlogCardToTag" ADD CONSTRAINT "_BlogCardToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "BlogCard"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlogCardToTag" ADD CONSTRAINT "_BlogCardToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
