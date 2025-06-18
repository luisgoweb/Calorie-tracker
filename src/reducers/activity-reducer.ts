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

        let updateActivity : Activity[] = []
        if(state.activeId){
            updateActivity = state.activities.map( activity => activity.id === state.activeId ? action.payload.newActivity : activity)
        }else{
            updateActivity = [...state.activities, action.payload.newActivity]
        }
        
        return{
               ...state,
               activities: updateActivity,
               activeId: ''
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