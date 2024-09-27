"use client"
// Prisma genera los tipos de datos de typescript
// (esto además de crear la base de datos)
import { Task } from "@prisma/client"
import { useRouter } from "next/navigation"

interface Props {
  task: Task
}

function TaskCard({ task }: Props) {
  const router = useRouter()

  return (
    <div className="bg-gray-900 p-3 hover:bg-gray-800 hover:cursor-pointer"
      onClick={() => {
        router.push(`tasks/edit/${task.id}`)
      }}>
      <h3 className="font-bold text-xl">{task.title}</h3>
      <p className="text-slate-300">{task.description}</p>
    </div>

  )
}

export default TaskCard
