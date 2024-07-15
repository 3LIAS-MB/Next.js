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

async function HomePage() {
  const tasks = await loadTask()
  console.log(tasks)

  return (
    <div className="grid grid-cols-3 gap-3 mt-5">
      {tasks.map(task => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  )
}

export default HomePage
1