<<<<<<< HEAD
function ToDoListItem({ todo, index }) {
    return (
        <li
            className="ToDoListItem"
            style={{
                backgroundColor: index % 2 ? "plum" : "lavender"
            }}
        >
            <span className="listItemNumber">{index}</span>
            <span>{todo}</span>
        </li>
=======
function ToDoListItem({ todo }) {
    return (
        <li className="ToDoListItem">{todo}</li>
>>>>>>> 73ff451 (just tidying up)
    )
}

export default ToDoListItem;