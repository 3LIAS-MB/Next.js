// @ -> hace referemcia a la raiz del proyecto
// sirve para reeplazar las rutas relativas ../../c
import PostCard from "@/components/PostCard";
import "./Posts.css"

async function loadPost() {
  const rest = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await rest.json();

  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return data;
}

// El hecho de que lleve async significa que ya no estamos hablando de
// un componente basico de react sino un componente que está procesando 
// codigo asincrono, y para que lo haga un servidor lo debe ejecutar

// RSC -> Reactr Server Component
export default async function PostPages() {
  const posts = await loadPost();
  return (
    <div className="grid">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}
