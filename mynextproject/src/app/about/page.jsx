"use client";
// Componente cliente. Hook router. Sirve
// también para cambiar de pagina como Link
// pero ejecuta algo antes del cambio
import { useRouter } from "next/navigation";

// No está permitodo export metadatos con "use client"
// export const metadata = {
//   title: "Acerca de nosotros - Faztweb",
// };

export default function AboutPage() {
  const router = useRouter();

  return (
    <section>
      <h1>About</h1>
      <p>
        eligendi ipsum aspernatur cumque natus debitis soluta magnam? Quos,
        adipisci. Quis, magni doloremque darchitecto saepe consequatur ut
        molestiae quas deserunt praesentium deleniti eum ullam repellat quod
        velit? Impedit obcaecati quod explicabo, ducimus, eaque neque eveniet
        distinctio incidunt laborum officia porro. Quibusdam, suscipit facere?
        Placeat inimi in accusamus quod, et alias ut at? Cum maiores odio
        repellat iste cumque voluptat e maxime debitis dignissimos delectus
        dolorum eaque sequi enim ex nesciunt earum nihil, eveniet odit minima!
        Iure eius, tempore necessitatibus, saepe, est corporis doloremque unde
        odit laborum delectus voluptatem alias harum. Aut architecto quos labore
        tenetur doloribus beatae, distinctio amet rem ipsam dolores perspiciatis
        aspernatur ut! Illo at nam consequatur laudantium sequi dolore eligendi
        fuga minus. Minima repudiandae quod dignissimos? Eius sit, ducimus non
        iste itaque, eaque obcaecati ipsum voluptates nemo repellat laboriosam
        repellendus? Culpa repellendus aliquid, sint, iusto esse hic facere
        magni, sapiente eligendi incidunt nulla delectus corporis?
      </p>
      <button
        className="bg-sky-400 px-3 py-2 rounded-md"
        onClick={() => {
          router.push("/");
        }}
      >
        Click
      </button>
    </section>
  );
}
