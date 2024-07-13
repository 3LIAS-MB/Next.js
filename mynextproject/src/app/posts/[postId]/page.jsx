import Post from "../page";
// Se puede usar sin la necesidad de usar un client server
// Suspende el componente hasta que cargue para poder mostrarlo
import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

// params es un parametro por defecto que contiene
// un objecto con dos valores, uno es un enpoint
async function Page({ params }) {
  const post = await loadPost(params.postId);

  return (
    <div>
      <h1>
        {post.id}. {post.title}
      </h1>
      <p>{post.body}</p>

      <hr />
      <h3>Otras publicaciones</h3>
      {/* Fallback es un elemento de un jsx para poder mostrar */}
      <Suspense fallback={<div>Cargando publicaciones...</div>}>
        <Post />
      </Suspense>
    </div>
  );
}

export default Page;
