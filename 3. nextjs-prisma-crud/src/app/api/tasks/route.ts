import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  // task -> hace referencia a la tabla que se habia creado
  // findMany() -> busca multiples datos que tenga dentro de la tabla
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

export async function POST(request: Request) {
  // sin await 'req.json()' devuelve una
  // promesa, no los datos resueltos.
  // const data = request.json();

  // devuelve un objeto {a: b}
  const data = await request.json();
  const newTask = await prisma.task.create({
    data: data,
  });
  return NextResponse.json(newTask);
}
