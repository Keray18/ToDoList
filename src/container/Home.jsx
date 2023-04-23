import React, { useEffect, useState } from 'react'
import Task from './container/Task'

const Home = () => {
  const initialArr = localStorage.getItem('task')
    ? JSON.parse(localStorage.getItem('task'))
    : []

  const [task, setTask] = useState(initialArr)
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const formHandler = (e) => {
    e.preventDefault()
    setTask([...task, { title, desc }])
  }
  
  const deleteTask = (index) => {
    const filterArr = task.filter( (val, i) => {
        return i !== index
    })
    setTask(filterArr)
  }

  useEffect( () => {
    localStorage.setItem('task', JSON.stringify(task))
  }, [task])


  return (
    <div className='container'>
        <form onSubmit={formHandler}>
            <input className='same' 
              type='text' 
              placeholder='Title' 
              value={title} 
              required
              onChange={(e) => {
                setTitle(e.target.value)
              }}
             />
            <textarea className='same' 
              placeholder='Description' 
              value={desc} 
              required
              onChange={(e) => {
                setDesc(e.target.value)
              }}
              ></textarea>

            <button className='same'>ADD</button>
        </form>
        
        {task.map( (item, index) => (
          <Task 
            key={index} 
            title={item.title} 
            desc={item.desc} 
            index={index} 
            deleteTask={deleteTask}
          />
        ))}
    </div>
  )
}

export default Home