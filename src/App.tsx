import { useEffect } from "react"
import ActivityList from "./components/ActivityList"
import CalorieTracker from "./components/CalorieTracker"
import Form from "./components/Form"
import { useActivity } from "./hooks/useActivity"


function App() {

  const {state, dispatch} = useActivity()

  useEffect(()=>{
      localStorage.setItem('activities', JSON.stringify(state.activities))
  },[state.activities])



  return (
    <>
        <header className="bg-lime-600 py-3">
            <div className="max-w-4xl mx-auto flex justify-between">
                <h1 className="text-center text-lg font-bold text-white uppercase">Contador de Calorias</h1>
                <button className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-lg disabled:opacity-10 "
                disabled={state.activities.length === 0}
                onClick={()=> dispatch({type: "restar-app"})}
                >
                Reiniciar App
                </button>
            </div>
            
        </header>

        <section className="bg-lime-500 py-20 px-5">
            <div className="max-w-4xl mx-auto">
                <Form />
            </div>
        </section>

        <section className="bg-gray-800 p-10">
            <div className="max-w-4xl mx-auto" >
                <CalorieTracker/>
            </div>
        </section>

        <section className="max-w-4xl p-10 mx-auto">
            <ActivityList />
        </section>
      
    </>
  )
}

export default App
