import style from "../style.module.css";

const Form  = ()=> {
    return(
        <div className={style.todoform}>
            <form>
                <input placeholder ="Add Todo Item"></input>
               <button>Add</button>
            </form>
        </div>
    )
}
export default Form;