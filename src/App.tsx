// so when starting a new React Proj, always make sure to use Eslint (recommended).
import './App.css'
import {Display} from "./displayTasks.tsx";

import type {Task} from "./TaskBlueprint.ts";
import {useState} from "react";



export const App = () => {

    //state
    const [taskList, setTaskList] = useState([
        { id: 1, title: 'Study React' },
        { id: 2, title: 'Finish homework' },
        { id: 3, title: 'Practice coding' }]);

    const [inputUserValue, setUserInput] = useState("");
    function submitHandler(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();
        if (inputUserValue.trim() ===""){return null} //
        const newTask:Task = {id: taskList.length + 1, title: inputUserValue};
        setTaskList(taskList => [...taskList, newTask]);


    }


//The next part is to add a task.
  return (
    <>
        <h1>Tasks</h1>
        <form id = "addTaskForm" onSubmit={submitHandler}>
          <input id ="add_task"  type = "text" onChange={(event) => setUserInput(event.target.value)} />
          <input id = "submit_button" type ="submit" value="Add a Task" onClick={() => {
            console.log(taskList);
          }}/>
        </form>
        <Display tasksToDisplay={taskList}/>
        <div id = "doneButton">
            <button>Done</button>
        </div>


    </>
  )
}






