// so when starting a new React Proj, always make sure to use Eslint (recommended).
import './App.css'

function App() {
    const tasks = [
        { id: 1, title: 'Study React' },
        { id: 2, title: 'Finish homework' },
        { id: 3, title: 'Practice coding' },
    ]; // example data
  return (
    <>
        <h1>Tasks </h1>
        <form>
          <input id ="add_task"  type = "text"/>
          <input id = "submit_button" type ="submit" value="Submitte"/>
        </form>
        <ul className={"List"}>
            {tasks.map(task => <li key={task.id} className={"task_card"} draggable={"true"}> {task.title}</li>)}
        </ul>
    </>
  )
}


export default App
