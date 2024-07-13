"use client"
// Esto es lo mismo que los parametros que recibe como props
import { useParams } from "next/navigation";

function UserPage({ params }) {
    const params = useParams()

    return <div>UserPage</div>;
  }
  
  export default UserPage;
  