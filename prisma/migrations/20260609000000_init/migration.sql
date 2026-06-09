-- CreateTable
CREATE TABLE "Paper" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "authors" TEXT,
    "year" INTEGER,
    "venue" TEXT,
    "url" TEXT,
    "doi" TEXT,
    "field" TEXT,
    "topics" TEXT,
    "tags" TEXT,
    "abstract" TEXT,
    "methodSummary" TEXT,
    "contribution" TEXT,
    "limitations" TEXT,
    "datasets" TEXT,
    "codeUrl" TEXT,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Paper_title_key" ON "Paper"("title");

