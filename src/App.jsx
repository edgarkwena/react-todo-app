import {useState, useEffect} from 'react'
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"


function App() {
  /*
  const todos = [{input: 'Freedom - EMM', complete: false},
                  {input: 'Dynasty - MIIA', complete: true},
                  {input: 'STFU (I got you) - Alaina Castillo', complete: false},
                  {input: 'The Death of Peace of Mind (Haha my Dp,- Bad Omens)', complete: false},
                  {input: 'Hurts so good - Astrid S', complete: true},
                  {input: 'Royalty - Egzod, Maestro Chives, Neoni', complete: true}
                ]
  */
  let savedTasks;

  try {
    savedTasks = JSON.parse(localStorage.getItem('localTasks')) || []; //Default operator
  } catch (error) {
    console.error('Error from Local Storage: ', error);
    savedTasks = []; // Fallback to an empty array if there's a parsing error
  }

  const [tasks, setTask] = useState(savedTasks);

  const [newTask, setNewTask] = useState('');

  const [filter, setFilter] = useState('All');

  useEffect(()=>{
    localStorage.setItem('localTasks', JSON.stringify(tasks));

  }, [tasks])

  const addTask = () => {
    if (newTask) {
        setTask([...tasks, {input: newTask, complete: false}]);
        setNewTask('');
        localStorage.setItem
    }
  };

  const toggleComplete = (ind) => {
    setTask(tasks.map((t, i) => 
    (i === ind ? {...t, complete: !t.complete} : t)
    ))
  }
/*
  const allDisplayFunc = () => {
    setTask((prevTasks) => prevTasks || tasks);
   
  }

  const openDisplayFunc = () => {
    setTask((prevTasks) => prevTasks.filter((t)=> !t.complete));
    
  }

  const completeDisplayFunc = () => {
    setTask((prevTasks) => prevTasks.filter((t)=> t.complete));
 
  }
*/

const filteredTasks = filter === 'All' ? tasks
                      : filter === 'Open' ? tasks.filter(t => !t.complete)
                      : tasks.filter(t => t.complete);

const deleteTasks = (index) => {
  setTask(tasks.filter((_,i)=> i !== index))
}

return (
    <>
      <Header todoList={tasks}/>

      <Tabs 
        todoList={tasks} 
        setFilter={setFilter}
        currentTab={filter}
      />

      <TodoList 
        todoList={filteredTasks}
        unfilteredTasks={tasks} 
        toggle = {toggleComplete}
        deleteTasks = {deleteTasks}
      />

      <TodoInput 
        taskInput={newTask} 
        setterNewTask={setNewTask} 
        addTaskFunc={addTask}
        />

    </>
  )
}

export default App
