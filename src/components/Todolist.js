import Todo from "./Todo"
const Todolist=({todoList})=>{
    return(
        <div>{todoList.map((todoItem)=>(
            <Todo todoItem={todoItem}></Todo>
        ))}</div>
    )
}
export default Todolist;
