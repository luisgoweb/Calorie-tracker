import type { Activity } from "../types"

export type ActivityActions = 
    {type: 'save-activity', payload: {newActivity: Activity}} |
    {type: 'activeId', payload: {id: Activity['id']}} 

export type activityState = {
    activities: Activity[],
    activeId: Activity['id']
}

export const initialState: activityState = {
    activities: [],
    activeId: ''
}

export const activityReducer = (
    state: activityState = initialState,
    action: ActivityActions
) => {

    if(action.type === "save-activity"){
        
        return{
               ...state,
               activities: [...state.activities, action.payload.newActivity]
                }
            }

            if(action.type === "activeId"){
                return {
                    ...state,
                    activeId: action.payload.id
                }
            }


            return state
        }