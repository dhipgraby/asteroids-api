-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Asteroids" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "diameter" INTEGER NOT NULL,
    "discovered" DATETIME NOT NULL,
    "comment" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Favorites" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "asteroid_id" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Favorites_user_id_asteroid_id_key" ON "Favorites"("user_id", "asteroid_id");
