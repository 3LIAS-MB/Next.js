import axios from "axios"
import { prisma } from "@/libs/prisma"
import TaskCard from "@/components/TaskCard"

async function loadTask() {
  // los datos se podrian pedir por http,
  // query a database, consultar archivos

  // al ser componente servidor (codigo de backend)
  // no sabe, nadie le completa esa ruta.
  // -> Extra los datos desde esta ruta. Petición http.
  // const res = await axios.get('http://localhost:3000/api/tasks')

  // Extrae los datos desde la base de datos
  // -> Consultando directamente la base de datos
  const tasks = await prisma.task.findMany()
  return tasks
}

// revalidate -> Guardar en memoria caché los datos para que
// carguen más rápido ya que está procesando desde el backend
export const revalidate = 60;
// siempre va a obviar la memoria caché 
// y va a volver a refrescar a página
export const dynamic = 'force-dynamic'

async function HomePage() {
  const tasks = await loadTask()
  console.log(tasks)

  return (
    <div className="gird md:grid grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
      {tasks.map(task => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  )
}

export default HomePage
1