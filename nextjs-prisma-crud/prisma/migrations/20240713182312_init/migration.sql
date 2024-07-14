-- Contiene el SQL que Prisma generó para aplicar esta migración. 
-- Incluye todas las instrucciones SQL necesarias para crear tablas, 
-- columnas, índices, etc., según lo definido en tu schema.prisma.

-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
