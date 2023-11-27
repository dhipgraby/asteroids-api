-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Asteroids" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "diameter" TEXT NOT NULL,
    "discovered" DATETIME NOT NULL,
    "comment" TEXT NOT NULL
);
INSERT INTO "new_Asteroids" ("comment", "diameter", "discovered", "id") SELECT "comment", "diameter", "discovered", "id" FROM "Asteroids";
DROP TABLE "Asteroids";
ALTER TABLE "new_Asteroids" RENAME TO "Asteroids";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
