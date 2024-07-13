// Todo esto que hemos escrito tiene el nombre en la documentación de
// Route Handlers. En versiones anteriores a la 13, se llama API Routes

// RUTAS Y CODIGO DE BACKEND, funcionan similar a las de fronted
import { NextResponse } from "next/server";

export async function GET() {
  // extract params
  // query database
  // communite with other services
  const res = await fetch(`https://jsonplaceholder.typicode.com/users?apikey=123${process.env.TOKEN}`);
  const data = await res.json();

  //return new Response("Hello world!")
  return NextResponse.json(data);
}

export async function POST(req) {
  // request body
  // const data = await req.json()
  const { nombre, apellido } = await req.json();
  console.log(nombre, apellido)

  return NextResponse.json({
    message: "Creando datos!",
  });
}

export function PUT() {
  return NextResponse.json({
    message: "Actualizando datos!",
  });
}

export function DELETE() {
  return NextResponse.json({
    message: "Eliminando datos!",
  });
}
