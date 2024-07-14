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
    )
}

export default ToDoListItem;