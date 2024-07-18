import ToDoListItem from "./ToDoListItem";
import "./ToDoList.css";

function ToDoList({ todos }) {
    return (
        <div className="ToDoList">
            <ul>
                {todos.map((t, idx) => (
<<<<<<< HEAD
                    <ToDoListItem todo={t} key={idx} index={idx + 1} />
=======
                    <ToDoListItem todo={t} key={idx} />
>>>>>>> 73ff451 (just tidying up)
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;