import { useContext } from "react"
import { ActivityContext } from "../context/ActivityContext"

export const useActivity = () => {
    const context = useContext(ActivityContext)
    if(!context){
        throw new Error("Debes rodear el app.tsx con el provider")
    }
    return context
}