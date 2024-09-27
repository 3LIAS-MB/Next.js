import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
  params: { id: string };
}

// Solamente se le está indicando que voy a obtener -> Request y Params
/*{ params: {id: string}}*/

// request: Es un objeto de tipo Request que representa la solicitud HTTP.Contiene
//  información sobre la solicitud, como el método, las cabeceras, el cuerpo, etc.

// { params }: Es un objeto que contiene los parámetros de la ruta.
// En este caso, params es un objeto que se desestructura para
// acceder directamente a sus propiedades.
export async function GET(request: Request, { params }: Params) {
  // 'findFirst' busca el primer objeto/registro
  //  que coincida con lo que busco
  const task = await prisma.task.findFirst({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(task);
}

export async function PUT(request: Request, { params }: Params) {
  const newData = await request.json();

  const taskUpdated = await prisma.task.update({
    // Especifica qué tarea debe actualizarse, usando
    // el id obtenido de los parámetros de la ruta.
    where: {
      id: Number(params.id),
    },
    // data: data: Especifica los nuevos datos para la tarea
    // puede ser escrita como data cuando el nombre de la
    // variable y la clave del objeto son iguales.
    data: newData,
  });

  return NextResponse.json(taskUpdated);
}

export async function DELETE(request: Request, { params }: Params) {
  const task = await prisma.task.delete({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(task);
}
