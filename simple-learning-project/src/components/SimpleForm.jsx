
import React from 'react'
import { useState } from 'react'

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    school: "",
    class: "ITA"
  })
  handlerChangename = () => {
    setFormData({
      name: formData.name,
    })
  }
  handlerChangeschool = () => {
    setFormData({
      school: formData.school,
    })
  }
  handlerChangeclass   = () => {
    setFormData({
      class: formData.class
    })
  }
  handlerSumbit = (e) => {

      alert(`Name: ${formData.name}, School: ${formData.school}, Class: ${formData.class}`)
    e.preventDefault();
  }  

  return (
    <div>
      <form onSubmit={handlerSumbit} >
        Name: <input type="text" name="name" className='name' placeholder='Enter name' onChange={handlerChangename}  value={formData.name}/>
        School: <input type="text" name="school" className='school' placeholder='Enter school' onChange={handlerChangeschool} value={formData.school}/>
        Class: <input type="text" name="class" className='class' placeholder='Enter class' onChange={handlerChangeclass} value={formData.class} />


    <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default SimpleForm
