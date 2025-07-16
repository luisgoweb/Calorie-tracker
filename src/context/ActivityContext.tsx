import { createContext, useReducer, type Dispatch, type ReactNode } from "react"
import { activityReducer, initialState, type ActivityActions, type activityState } from "../reducers/activity-reducer"

type ActivityContextProps = {
    children: ReactNode
}

type ActivityProviderProps = {
    state: activityState
    dispatch: Dispatch<ActivityActions>
}

export const ActivityContext = createContext<ActivityProviderProps>(null!)

export const ActivityProvider = ({children}: ActivityContextProps) => {
    
    const[state, dispatch] = useReducer(activityReducer, initialState)

    return (
        <ActivityContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </ActivityContext.Provider>
    )

}