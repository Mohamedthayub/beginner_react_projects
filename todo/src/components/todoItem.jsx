import tick from "../images/tick.png";
import not_pick from "../images/not_tick.png";
import "../styles/todoItem.css";
// import cross from "../images/cross.png";


const TodoItems = ({no,text,display,setData}) => {
    const deleteTodo = (no) => {
        let data = JSON.parse(localStorage.getItem("thayub-todo"));
        data = data.filter((todo) => todo.no != no);
        setData(data);
    }
    return (
        <>
         <div className="todo-item" >
            <div className="todo">
                {display == "" ? <img src={not_pick}></img> :    <img src={tick}></img>}
                <p>{text}</p>
            </div>
            <button className="delete-btn" onClick={() => {
                deleteTodo(no)
            }}>delete</button>
            </div>        
        </>
    )
}

export default TodoItems