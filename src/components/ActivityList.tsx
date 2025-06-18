import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline"
import type { Activity } from "../types"

type ActivityListProps = {
    activities: Activity[]
}

const ActivityList = ({activities} : ActivityListProps) => {
  return (
    <>
        <h2 className="text-4xl text-center text-slate-600 font-bold">Comida y Actividades</h2>
            {activities.map( activity => (
                <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between">
                    <div className="space-y-2 relative">
                        <p className={`absolute -top-8 -left-8 px-10 py-2 text-white font-bold uppercase ${activity.category === 1 ? "bg-lime-500" : "bg-orange-500"} `}>
                            {activity.category === 1 ? "Comida" : "Ejercicio"}
                        </p>
                        <p className="text-2xl pt-5 font-bold">{activity.name}</p>
                        <p className="text-4xl pt-5 font-black text-lime-500">{activity.calories} {''} <span>calorías</span></p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <button>
                            <PencilSquareIcon
                            className="h-8 w-8 text-gray-800"
                            />
                        </button>
                        <button>
                            <XCircleIcon
                            className="h-8 w-8 text-red-800"
                            />
                        </button>
                    </div>
                </div>
            ))}
    </>
  )
}

export default ActivityList
