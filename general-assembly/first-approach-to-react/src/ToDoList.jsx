import ToDoListItem from "./ToDoListItem";
import "./ToDoList.css";

function ToDoList({ todos }) {
    return (
        <div className="ToDoList">
            <ul>
                {todos.map((t, idx) => (
<<<<<<< HEAD
<<<<<<< HEAD
                    <ToDoListItem todo={t} key={idx} index={idx + 1} />
=======
                    <ToDoListItem todo={t} key={idx} />
>>>>>>> 73ff451 (just tidying up)
=======
                    <ToDoListItem todo={t} key={idx} />
>>>>>>> ad3f73a8d6e78ced7fe859bd54211e9b11ed591a
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;