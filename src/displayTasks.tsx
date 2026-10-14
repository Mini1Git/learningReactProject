import type {Task} from "./TaskBlueprint.ts"




type DisplayingTasksProps = { // good practice to make props for components
    tasksToDisplay: Task[];
    selectedTask: Task | null;
    setSelectedTask: (task: Task | null) => void; // input of task
};


export const Display = ({tasksToDisplay, selectedTask, setSelectedTask}:DisplayingTasksProps) => { // this is how you extract props


    return (// this goes through each task, and adds a corresponding "li", then also sets the task state.
    <>
        <ul id="List">
            {tasksToDisplay.map((task) =>
                <li key={task.id} className={task.completed === false ? (selectedTask?.id === task.id ? "task_card selected":"task_card"): "task_card completed"} onClick={() => {
                    if (selectedTask === null){
                        setSelectedTask(task);
                    }
                    else if (selectedTask.id == task.id){
                        setSelectedTask(null);
                    }
                    else{
                        setSelectedTask(task); // task is what u click on.
                    }

                }}>
                {
                    task.title}</li>
                )}
        </ul>

    </>
    )



}

