// so when starting a new React Proj, always make sure to use Eslint (recommended).
import './App.css'
import {useState} from "react";
import type {Task} from "./TaskBlueprint.ts";
//need to learn how to use states.



export const App = () => {

    const tasks = [
        { id: 1, title: 'Study React' },
        { id: 2, title: 'Finish homework' },
        { id: 3, title: 'Practice coding' },
    ]; // example data

    const [selectedTask, setTask] = useState<Task | null> // what types can be used for this state.
    (null); // default value

  return (
    <>
        <h1>Tasks</h1>
        <form>
          <input id ="add_task"  type = "text"/>
          <input id = "submit_button" type ="submit" value="Submitte"/>
        </form>
        <ul id="List">
            {tasks.map(task => <li key={task.id} className={"task_card"} onClick={() => {
                setTask({id:task.id, title:task.title});

            }}> {task.title}</li>)}
        </ul>
        <p>Selected Task: {selectedTask?.title ?? "No Task selected!"}</p>
    </>
  )
}





