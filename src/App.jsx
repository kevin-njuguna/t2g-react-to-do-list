import { useState } from 'react'
import './App.css'

function ToDoList({ task }) {
  return (
    <div className='tasks-display'>
      <p>{task}</p>
    </div>
  )
}

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  function handleChange(e) {
    setTask(e.target.value)
  }

  function handleAddTask(e) {
    e.preventDefault()
    if (!task || task.trim() ==="" ) {
      alert("Task is required")
    }

    const newTask = { task }
    setTasks(prevTasks => [...prevTasks, newTask])
    setTask("") 
  }

  return (
    <div id='app'>
      <h1 className='app-title'>To Do List</h1>
      <form>
        <input type="text" className='input' placeholder='Task' value={task} onChange={handleChange}
        />
        <button onClick={handleAddTask}>+</button>
      </form>

      {tasks.map((task, idx) => (
        <ToDoList key={idx} task={task.task} />
      ))}
    </div>
  )
}

export default App
