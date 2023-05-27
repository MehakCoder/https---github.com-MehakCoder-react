import Header from "./components/Header";
import Form from "./components/Form";
import {useState} from "react";
import Todolist from "./components/Todolist";
function App() {
  const [todo,setTodo] = useState('')
  const [todoList,setTodoList] = useState([])
  return (
    <div className="App">
     <Header></Header>
     <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}></Form>
     <Todolist todoList={todoList}></Todolist>

    </div>
  );
}

export default App;
