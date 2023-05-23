import style from "../style.module.css";

const Form  = ({todo, setTodo, todoList, setTodoList})=> {

    const handleChange=(event)=>{
        setTodo(event.target.value)
        console.log(todo)
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        setTodoList([...todoList,todo])
        console.log(todoList)
    }
    return(
        <div className={style.todoform}>
            <form onSubmit={handleSubmit}>
                <input value={todo} onChange={handleChange} className={style.todoinput} placeholder ="Add Todo Item"></input>
               <button type='submit' className={style.todobtn}>Add</button>
            </form>
        </div>
    )
}
export default Form;