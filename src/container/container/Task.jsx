import React from 'react'

const Task = ({ title, desc, index, deleteTask }) => {

    return (
      <div className='task same'>
        <div className='inTask'>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <button onClick={() => deleteTask(index)}>-</button>
      </div>
    )
}
export default Task