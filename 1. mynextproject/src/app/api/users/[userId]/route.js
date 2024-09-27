import { NextResponse } from "next/server";

// route handlers params
export async function GET(req, { params }) {
  // Esto va a tomar la información de la URL que
  // es un String y lo va a convertir en un objeto
  // SearchParams devolverá una estructura conocida
  // como MAP -> "{ 'nombre' => 'L', 'apellido' => 'S'}"
  // Y asi es como podemos obtener las querys (lo mismo para el fronted)
  const { searchParams } = new URL(req.url);
  // searchParams.get('nombre') -> obtener la queary 'nombre'

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const data = await res.json();
  return NextResponse.json(data);
}
