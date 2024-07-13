import ToDoListItem from "./ToDoListItem";
import "./ToDoList.css";

function ToDoList({ todos }) {
    return (
        <div className="ToDoList">
            <ul>
                {todos.map((t, idx) => (
                    <ToDoListItem todo={t} key={idx} />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;