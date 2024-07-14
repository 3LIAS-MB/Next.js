import { PrismaClient } from "@prisma/client/extension";

// Este objeto prisma tiene propiedades, entre ellas 'task' que hace referencia
// a las tablas de tareas. Puedo buscar datos, crear, actualizar, eliminar

// Esta es basicamente la coneccion. No hace falta tipear donde está la base de datos
// ni nada de eso, pues crisma genera el cliente o modulo, asi que simplemente se lo llama
export const prisma = new PrismaClient();
