import React from 'react'

const Header = () => {
    const today = new Date() 
    const day = today.toLocaleDateString('default', {weekday: 'long'})
    const month = today.toLocaleDateString('default', {month: 'long'})
    const date = today.getDate()
  return (
    <header className='head'>
        <h1> {day}, {month} {date} </h1>
        <h2><u>DAILY GOALS</u></h2>
    </header>
  )
}

export default Header