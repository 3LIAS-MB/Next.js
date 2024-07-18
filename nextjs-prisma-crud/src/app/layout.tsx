import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Readonly<...>: Es un tipo genérico de TypeScript que convierte todas las propiedades
// de un objeto en solo lectura. Esto significa que una vez que el objeto ha sido creado,
// sus propiedades no pueden ser modificadas. { children: React.ReactNode; }: Especifica
// que el objeto tiene una propiedad llamada children cuyo tipo es React.ReactNode.

// -> Seguridad: Readonly hace que el objeto props sea inmutable,
// lo que ayuda a prevenir errores accidentales al modificar
// los props dentro del componente.
// -> Flexibilidad: Sin Readonly, tienes la flexibilidad de
// modificar los props, pero esto puede llevar a errores
// difíciles de depurar y hacer que el código sea más difícil de mantener.

// React.ReactNode: Es un tipo en React que representa cualquier cosa que React pueda renderizar. Esto incluye:
// Elementos de React (<div>, <Component />, etc.).
// Cadenas de texto.
// Números.
// Fragmentos (<>...</>).
// Arrays de nodos.
// Nulos y booleanos (aunque estos no se renderizan).

export default function RootLayout({
  children, 
}: Readonly<{ children: React.ReactNode; }>) { // Tipado con TypeScript
  return (
    <html lang="en">
      <body className='container mx-auto'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
