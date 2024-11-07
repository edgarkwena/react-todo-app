export function TodoInput({taskInput, setterNewTask, addTaskFunc}) {
    return (
        <div className="input-container">
            <input placeholder="Add task"
            type="text"
            value={taskInput}
            onChange={(e) => {setterNewTask(e.target.value)}}/>
            <button onClick={addTaskFunc}>
            <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}