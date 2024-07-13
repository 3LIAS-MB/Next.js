// Todo esto que hemos escrito tiene el nombre en la documentación de 
// Route Handlers. En versiones anteriores a la 13, se llama API Routes

// RUTAS Y CODIGO DE BACKEND, funcionan similar a las de fronted
import { NextResponse } from "next/server";

export async function GET() {
  // extract params
  // query database
  // communite with other services
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()

  //return new Response("Hello world!")
  return NextResponse.json(data);
}

export function POST() {
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
