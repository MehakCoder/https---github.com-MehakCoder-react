import Todo from "./Todo"
const Todolist=({todoList, setTodoList})=>{
    return(
        <div>
            {todoList.map((todoItem)=>(
            <Todo
             setTodoList={setTodoList}
             key={todoItem.id}  
             todoItem={todoItem} 
             todoList={todoList}
             ></Todo>
        ))}</div>
    )
}
export default Todolist;
