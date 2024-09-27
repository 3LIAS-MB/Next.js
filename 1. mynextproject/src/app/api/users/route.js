// Todo esto que hemos escrito tiene el nombre en la documentación de
// Route Handlers. En versiones anteriores a la 13, se llama API Routes

// NextResponse() reemplaza a Response, facilita algunas 
// cosas para poder devolver otro tipo de respuestas. Probar
import { NextResponse } from "next/server";

// RUTAS Y CODIGO DE BACKEND, funcionan similar a las de fronted
export async function GET() {
  // extract params
  // query database
  // communite with other services
  const res = await fetch(`https://jsonplaceholder.typicode.com/users?apikey=${process.env.TOKEN}`);
  const data = await res.json();

  
  //return new Response("Hello world!")
  return NextResponse.json(data);
}

export async function POST(req) {
  // En nextjs no es red.bady, simplemente req y lo transformamos 
  // en json, esta es la inf que nos está enviando el cliente
  const { nombre, apellido } = await req.json();

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
