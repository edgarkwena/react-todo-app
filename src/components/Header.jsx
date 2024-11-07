export function Header({todoList}){
 
    const isSingleTask = todoList.length === 1;

    return (
        <header>
            <h1 className="text-gradient"> 
                You have {todoList.length} to-do {isSingleTask ? 'task' : 'tasks'}.
            </h1>
        </header>
    )
}