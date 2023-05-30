import style from "../style.module.css";

const Todo = ({todoItem, todoList, setTodoList}) => {
    const deleteTodo = () =>{
        setTodoList(        todoList.filter((item) => item.id !== todoItem.id))

    }
    return(
        <div>
            <div className={style.todoItem}>
                <h3 className={style.todoname}>{todoItem.name}</h3>
                <button onClick={deleteTodo} className={style.deletebtn}>Done</button>
            </div>
        </div>
    )
}

export default Todo;