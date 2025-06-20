import { useState } from 'react'
import './App.css'

function ToDoList({ task, description }) {
  return (
    <div className='display'>
      <p className='task-display'><strong>{task}</strong></p>
      <p className='description-display'>{description}</p>
    </div>
  )
}

function App() {
  const [task, setTask] = useState("")
  const [description, setDescription] = useState("")
  const [tasks, setTasks] = useState([])

  function handleChange(e) {
    setTask(e.target.value)
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  function handleAddTask(e) {
    e.preventDefault()
    if (!task || task.trim() ==="" ) {
      alert("Task is required")
    }

    const newTask = { task, description }
    setTasks(prevTasks => [...prevTasks, newTask])
    setTask("")
    setDescription("")
  }

  return (
    <div className='app'>
      <h1 className='app-title'>To Do List</h1>
      <form>
        <input
          type="text"
          className='input'
          placeholder='Task'
          value={task}
          onChange={handleChange}
        />

        <input
          type="text"
          className='input'
          placeholder='Description'
          value={description}
          onChange={handleDescriptionChange}
        />

        <button onClick={handleAddTask}>+</button>
      </form>

      {tasks.map((task, idx) => (
        <ToDoList key={idx} task={task.task} description={task.description} />
      ))}
    </div>
  )
}

export default App
