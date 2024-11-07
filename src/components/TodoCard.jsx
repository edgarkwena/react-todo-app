export function TodoCard({todo,todoIndex,tF, dT}) {
    console.log(todo);
    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button 
                onClick={() => tF(todoIndex)}  
                disabled={todo.complete}>
                    <h6>Done</h6>
                </button>
                <button
                onClick = {() => dT(todoIndex)}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}