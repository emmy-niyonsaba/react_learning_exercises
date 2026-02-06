
import React from 'react'

const SimpleForm = () => {
  return (
    <div>
      <form action="">
        Name: <input type="text" name="name" className='name' placeholder='Enter name' />
        School: <input type="text" name="school" className='school' placeholder='Enter school' />
        Class: <input type="text" name="class" className='class' placeholder='Enter class' />
      </form>
    </div>
  )
}

export default SimpleForm
