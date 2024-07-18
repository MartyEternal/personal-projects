<<<<<<< HEAD
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
=======
function ToDoListItem({ todo }) {
    return (
        <li className="ToDoListItem">{todo}</li>
>>>>>>> ad3f73a8d6e78ced7fe859bd54211e9b11ed591a
    )
}

export default ToDoListItem;