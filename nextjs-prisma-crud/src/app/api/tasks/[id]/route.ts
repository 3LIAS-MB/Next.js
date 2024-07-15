import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params {
  params: { id: string };
}

// Solamente se le está indicando que voy a obtener -> Request y Params
/*{ params: {id: string}}*/
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
  const data = await request.json();

  const taskUpdated = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data: data,
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
