import style from "../style.module.css";

const Todo = ({todoItem}) => {
    return(
        <div>
            <div className={style.todoItem}>
                <h3 className={style.todoname}>{todoItem}</h3>
                <button className={style.deletebtn}>Done</button>
            </div>
        </div>
    )
}

export default Todo;