"use client";
import Link from "next/link";
// como 'params' está en el elemento que los contiene,
// no puede usarse desde las props de este fichero,
// por lo que es util usar el hook useParams para usarlo
import { useParams } from "next/navigation";

// RCC -> React Client Compomemt
export default function PostCard({ post }) {

  return (
    <div className="bg-gray-950 p-10">
      <Link href={`/posts/${post.id}`}>
        <h3 className="text-xl font-bold mb-4">
          {post.id}. {post.title}
        </h3>
      </Link>
      <p className="text-slate-300 bg">{post.body}</p>

      <br />
      
      <button
        onClick={() => {
          alert("Click funcionando");
        }}
      >
        CLICK
      </button>
    </div>
  );
}
