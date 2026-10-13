import type {Task} from "./TaskBlueprint.ts"
import {useState} from "react";



type DisplayingTasksProps = {
    tasksToDisplay: Task[];
};

export const Display = ({tasksToDisplay}:DisplayingTasksProps) => { // this is how you extract props
    const [selectedTask, setSelectedTask] = useState<Task | null> // what types can be used for this state.
        (null); // default value

    return (// this goes through each task, and adds a corresponding "li", then also sets the task state.
    <>
        <ul id="List">
            {tasksToDisplay.map((task) =>
                <li key={task.id} className={selectedTask?.id === task.id ? "task_card_selected":"task_card"} onClick={() => {
                    if (selectedTask === null){
                        setSelectedTask(task);
                    }
                    else{
                        setSelectedTask(null);
                    }

                }}>
                {
                    task.title}</li>
                )}
        </ul>
        <p>Selected Task: {selectedTask?.title ?? "No Task selected!"}</p>
    </>
    )

}