import { useState, type Dispatch } from "react"
import { v4 } from "uuid"
import { categories } from "../data/categories"
import type { ActivityActions } from "../reducers/activity-reducer"
import type { Activity } from "../types"

type FormProps = {
    dispatch: Dispatch<ActivityActions>
}

const Form = ({dispatch} : FormProps) => {

    const initialState : Activity = {
        id: v4(),
        category: 1,
        name: '',
        calories: 0
    }

    const[activity, setActivity] = useState<Activity>(initialState)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement> )=>{
        const isNumberField = ['category', 'calories'].includes(e.target.id)
        setActivity({
            ...activity,
            [e.target.id] : isNumberField ? +e.target.value : e.target.value
        })
    }

    const isValidActivity = ()=>{
        const { name, calories } = activity
        return name.trim() !== '' && calories > 0
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        dispatch({type: "save-activity", payload: {newActivity: activity}})

        setActivity(initialState)
    }

  return (
    <form className="space-y-5 p-10 shadow bg-white rounded-lg"
    onSubmit={handleSubmit}
    >

        <div className="grid grid-cols-1 gap-3">
            <label className="font-bold" htmlFor="category">Categoría:</label>
            <select 
            className="border border-slate-300 p-2 rounded-lg w-full bg-white"
            id="category"
            value={activity.category}
            onChange={handleChange}
            >
                {categories.map(category => (
                    <option 
                    key={category.id} 
                    value={category.id}
                    >
                        {category.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label className="font-bold" htmlFor="name">Actividad:</label>
            <input 
            id="name"
            type="text"
            className="border border-slate-300 p-2 rounded-lg w-full bg-white"
            placeholder="Ejem: ejercicio o comida"
            value={activity.name}
            onChange={handleChange}
            />
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label className="font-bold" htmlFor="calories">Calorías:</label>
            <input 
            id="calories"
            type="number"
            className="border border-slate-300 p-2 rounded-lg w-full bg-white"
            placeholder="Ejem: 200 o 300"
            value={activity.calories}
            onChange={handleChange}
            />
        </div>

        <input 
        type="submit"
        value={activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"}
        className="bg-gray-800 hover:bg-gray-900 text-white p-2 font-bold w-full rounded-lg cursor-pointer disabled:opacity-10"
        disabled={!isValidActivity()}
        />

    </form>
  )
}

export default Form
