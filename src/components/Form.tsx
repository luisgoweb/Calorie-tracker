

const Form = () => {
  return (
    <form className="space-y-5 p-10 shadow bg-white rounded-lg">
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category">Categoría:</label>
            <select 
            className="border border-slate-300 p-2 rounded-lg w-full bg-white"
            id="category"
            >

            </select>
        </div>
    </form>
  )
}

export default Form
