"use client";
// 'useForm': Utiliza un hook para identificar un formulario
// -> nos permite manejar el evento de envie del formulario
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";

function NewPage({ params }: { params: { id: string } }) {
  // const { handleSubmit, register, formState, watch,
  // reset, setValue, getValues, trigger } = useForm();

  // handleSubmit -> Este método se utiliza para manejar el
  // evento de envío del formulario. Envuelve la función de envío
  // para que pueda recibir y procesar los datos del formulario.

  // register -> Este método se usa para registrar los campos del
  // formulario y aplicar reglas de validación. Vincula los campos del
  // formulario con la gestión de estado interna de 'react-hook-form'.

  // setValue -> Para actualizar los valores del register
  const { handleSubmit, register, setValue } = useForm();
  // me da un objeto que se utiliza
  // para poder cambiar de página
  const router = useRouter();

  useEffect(() => {
    if (params.id) {
      axios.get(`/api/tasks/${params.id}`).then((res) => {
        setValue("title", res.data.title);
        setValue("description", res.data.description);
      });
    }
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await axios.put(`/api/tasks/${params.id}`, data);
    } else {
      // al ser un componente cliente js o el
      // navegador autocompleta la direccion que le falta
      await axios.post("/api/tasks", data);
    }
    router.push("/");
    // Refresca los datos cuando se cambia de página
    router.refresh();
  });

  return (
    <section className="h-[calc(100vh-7rem)] flex items-center justify-center">
      <form onSubmit={onSubmit} className="w-1/4">
      <h1 className=" text-3xl font-bold">
        {params.id ? "Update" : "Create"} Task
      </h1>
        <label htmlFor="title" className="font-bold text-sm flex">
          Write your title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Write a tittle"
          className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-300 focus:border-sky-300 text-black mb-2 w-full"
          // register añade por ej. el onchange, el name, value...
          // y ya no lo tenemos que hacer manualmente
          {...register("title")}
        />

        <label htmlFor="description" className="font-bold text-sm flex">
          Write your description
        </label>
        <textarea
          id="description"
          placeholder="Write a description"
          className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-300 focus:border-sky-300 text-black w-full"
          {...register("description")}
        />

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-sky-500 px-3 py-1 rounded-md text-white mt-2"
          >
            {params.id ? "Update" : "Create"}
          </button>

          <button
            type="button"
            className="bg-red-500  px-3 py-1 rounded-md text-white mt-2"
            onClick={async () => {
              if (confirm("Are you want to delete this task?")) {
                await axios.delete(`/api/tasks/${params.id}`);
                router.push("/");
                router.refresh();
              }
            }}
          >
            Delete
          </button>
        </div>
      </form>
    </section>
  );
}

export default NewPage;
