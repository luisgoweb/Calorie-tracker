import { useMemo } from "react"
import type { Activity } from "../types"


type CalorieTrackerProps = {
    activities: Activity[]
}

const CalorieTracker = ({activities}: CalorieTrackerProps) => {

    const calorieConsumed = useMemo(()=> activities.reduce((total,activity) => activity.category === 1 ? total + +activity.calories : total, 0) ,[activities])
    const calorieBurn = useMemo(()=> activities.reduce((total,activity) => activity.category === 2 ? total + +activity.calories : total, 0) ,[activities])
  return (
    <>
        <h2 className="text-4xl text-white text-center font-black">Resumen de Calorías</h2> 
        <div className="flex flex-col items-center md:flex-row  md:justify-between gap-5 mt-10">
            <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center"> 
                <span className="font-black text-6xl text-orange">{calorieConsumed}</span>
                Cosumidas
            </p>

            <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center"> 
                <span className="font-black text-6xl text-orange">{calorieBurn}</span>
                Ejercicio
            </p>
        </div>
       
    </>
  )
}

export default CalorieTracker
