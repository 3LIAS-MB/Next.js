"use client"
// 'useForm': Utiliza un hook para identificar un formulario
// -> nos permite manejar el evento de envie del formulario
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import axios from "axios"

function NewPage() {
    // const { handleSubmit, register, formState, watch, 
    // reset, setValue, getValues, trigger } = useForm();

    // handleSubmit -> Este método se utiliza para manejar el  
    // evento de envío del formulario. Envuelve la función de envío 
    // para que pueda recibir y procesar los datos del formulario.

    // register -> Este método se usa para registrar los campos del 
    // formulario y aplicar reglas de validación. Vincula los campos del 
    // formulario con la gestión de estado interna de 'react-hook-form'.
    const { handleSubmit, register } = useForm()
    // me da un objeto que se utiliza 
    // para poder cambiar de página
    const router = useRouter()

    const onSubmit = handleSubmit(async (data) => {
        console.log(data)
        // al ser un componente cliente js o el
        // navegador autocompleta la direccion que le falta
        const res = await axios.post('/api/tasks', data)
        console.log(res)
        console.log('xd')
        router.push('/')
        // Refresca los datos cuando se cambia de página
        router.refresh()
    })

    return (
        <section className="h-screen flex items-center justify-center">
            <form onSubmit={onSubmit}>
                <label htmlFor="title" className="font-bold text-sm flex">Write your title</label>
                <input id="title" type="text" placeholder="Write a tittle" className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-300 focus:border-sky-300 text-black mb-2"
                // register añade por ej. el onchange, el name, value...
                // y ya no lo tenemos que hacer manualmente
                {...register('title')}/> 

                <label htmlFor="description" className="font-bold text-sm flex">Write your description</label>
                <textarea id="description" placeholder="Write a description" className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-300 focus:border-sky-300 text-black w-full" {...register('description')}/>
                
                <button className="bg-sky-500 px-3 py-1 rounded-md text-white mt-2">
                    Create
                </button>
            </form>
        </section>
    )
}

export default NewPage
