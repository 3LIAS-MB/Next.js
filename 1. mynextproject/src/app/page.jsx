import Users from "@/components/Users";

// Los metadata solo funcionan con paginas que estén del lado del servidor
export const metadata = {
  title: "Mi pagina especial Home",
};

export default function HomePage() {
  return (
    // Parent container with flexbox to center child element
    <div className="flex items-center justify-center h-screen">
      <section className="border-2 border-rose-700 px-5 w-7/10 h-7/10 flex items-center justify-center">
        <h1>Hello world</h1>
      </section>
      {/* Client component */}
      <Users />
    </div>
  );
}
