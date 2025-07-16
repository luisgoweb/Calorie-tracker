import { useMemo } from "react"
import { useActivity } from "../hooks/useActivity"
import CalorieDisplay from "./CalorieDisplay"


const CalorieTracker = () => {
   const {state} = useActivity()

    const calorieConsumed = useMemo(()=> state.activities.reduce((total,activity) => activity.category === 1 ? total + +activity.calories : total, 0) ,[state.activities])
    const calorieBurn = useMemo(()=> state.activities.reduce((total,activity) => activity.category === 2 ? total + +activity.calories : total, 0) ,[state.activities])
    const netCalories = useMemo(()=> calorieConsumed - calorieBurn ,[state.activities])
  return (
    <>
        <h2 className="text-4xl text-white text-center font-black">Resumen de Calorías</h2> 
        <div className="flex flex-col items-center md:flex-row  md:justify-between gap-5 mt-10">
            <CalorieDisplay 
            calories={calorieConsumed}
            text="Consumidas"
            />

            <CalorieDisplay 
            calories={calorieBurn}
            text="Ejercicio"
            />

            <CalorieDisplay 
            calories={netCalories}
            text="Diferencia"
            />

           
        </div>
       
    </>
  )
}

export default CalorieTracker
