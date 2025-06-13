import { categories } from "../data/categories"

const Form = () => {
  return (
    <form className="space-y-5 p-10 shadow bg-white rounded-lg">

        <div className="grid grid-cols-1 gap-3">
            <label className="font-bold" htmlFor="category">Categoría:</label>
            <select 
            className="border border-slate-300 p-2 rounded-lg w-full bg-white"
            id="category"
            >
                {categories.map(category => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label className="font-bold" htmlFor="activity">Actividad:</label>
            <input 
            id="activity"
            type="text"
            className="border border-slate-300 p-2 rounded-lg w-full bg-white"
            placeholder="Ejem: ejercicio o comida"
            />
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label className="font-bold" htmlFor="calories">Calorías:</label>
            <input 
            id="calories"
            type="number"
            className="border border-slate-300 p-2 rounded-lg w-full bg-white"
            placeholder="Ejem: 200 o 300"
            />
        </div>

        <input 
        type="submit"
        value="Enviar comida o enviar ejercicio"
        className="bg-gray-800 hover:bg-gray-900 text-white p-2 font-bold w-full rounded-lg cursor-pointer"
        />

    </form>
  )
}

export default Form
