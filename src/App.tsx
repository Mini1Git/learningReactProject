// so when starting a new React Proj, always make sure to use Eslint (recommended).
import './App.css'
import {Display} from "./displayTasks.tsx";

import type {Task} from "./TaskBlueprint.ts";
import {useState} from "react";



export const App = () => {

    //state
    const [taskList, setTaskList] = useState([
        { id: 1, title: 'Study React' , completed: false},
        { id: 2, title: 'Finish homework', completed: false},
        { id: 3, title: 'Practice coding', completed: false}]); //example data

    const [inputUserValue, setUserInput] = useState("");
    const [selectedTask, setSelectedTask] = useState<Task | null> // what types can be used for this state.
        (null); // default value


    function submitHandler(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();
        if (inputUserValue.trim() ===""){return null}
        const newTask:Task = {id: taskList.length + 1, title: inputUserValue, completed: false};
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
        <Display tasksToDisplay={taskList} setSelectedTask={setSelectedTask} selectedTask={selectedTask}/>
        {<p>Selected Task: {taskList.length !== 0 ? selectedTask?.title ?? "No Task selected!": "Done All Tasks!"}</p>}

        <div id = "doneButton">
            <button onClick={()=>{
                taskList.map((t) => {
                    if (t.id == selectedTask?.id){
                        t.completed = true;
                    }

                })
                setTaskList(taskList.filter(ta => ta.id !== selectedTask?.id));
                //array.filter returns a new array.
                setSelectedTask(null); //updates the task immediately.
            }}>Done</button>
        </div>



    </>
  )
}






