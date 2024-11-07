import {TodoCard} from "./TodoCard";

export function TodoList({unfilteredTasks, todoList, toggle, deleteTasks}) {

    return (
        <>
          {todoList.map((todo, todoIndex) => (
                <TodoCard 
                    key={todoIndex}
                    todo={todo}
                    /*todoIndex={todoIndex}*/
                    todoIndex={unfilteredTasks.findIndex(val => val.input === todo.input)}
                    tF = {toggle}
                    dT = {deleteTasks}
                />
            ))} 
        </>
    );
}  