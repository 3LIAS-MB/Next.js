import { NextResponse } from "next/server";

// route handlers params
export async function GET(req, { params }) {
// Crea un objeto URL a partir de req.url, permitiendo acceder 
// fácilmente a partes específicas de la URL.
// 
// - `searchParams`: Es una instancia de URLSearchParams, que proporciona
//   métodos para trabajar con los parámetros de consulta (query parameters).
//   Por ejemplo: "?nombre=L&apellido=S" se convierte en un objeto similar a un MAP.
//   Ejemplo de uso: searchParams.get('nombre') -> 'L'
// 
// - `search`: Devuelve la cadena completa de los parámetros de consulta,
//   incluyendo el signo '?'. Ejemplo: "?nombre=L&apellido=S"
// 
// - `pathname`: Devuelve la parte de la URL después del dominio pero
//   sin incluir parámetros de consulta ni hash. Ejemplo: "/api/users"
// 
// - `host`: Devuelve el host (dominio y puerto). Ejemplo: "localhost:3000"
const { searchParams, search, pathname, host } = new URL(req.url);

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const data = await res.json();
  return NextResponse.json(data);
}
