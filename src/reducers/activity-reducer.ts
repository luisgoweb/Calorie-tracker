import type { Activity } from "../types"

export type ActivityActions = 
    {type: 'save-activity', payload: {newActivity: Activity}} |
    {type: 'activeId', payload: {id: Activity['id']}} |
    {type: 'delete-activity', payload: {id: Activity['id']}} 

export type activityState = {
    activities: Activity[],
    activeId: Activity['id']
}

const localStorageActivity = () : Activity[] =>{
    const getStorage = localStorage.getItem('activities')
    return getStorage ? JSON.parse(getStorage) : []
}

export const initialState: activityState = {
    activities: localStorageActivity(),
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

            if(action.type === "delete-activity"){
                return{
                    ...state,
                    activities: state.activities.filter( activity => activity.id !== action.payload.id)
                }
            }


            return state
        }