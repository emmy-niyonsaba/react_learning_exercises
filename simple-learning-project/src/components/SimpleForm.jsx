
import React from 'react'
import { useState } from 'react'

const SimpleForm = () => {

const [formData, setFormData] = useState({
    name: "",
    school: "",
    class: "ITA"
})


const handlerChange = (e) => {
  const [name, value] = e.target
    setFormData({
        ...formData,
        [name]: value
    })
}
const handlerSubmit = (e) => {
    e.preventDefault();
   alert(JSON.stringify(formData));
}
  return (
    <div>
      <form onSubmit={handlerSubmit} >
        Name: <input type="text" name="name" className='name' placeholder='Enter name'onChange={handlerChange} />
        School: <input type="text" name="school" className='school' placeholder='Enter school'onChange={handlerChange} />
        Class: <input type="text" name="class" className='class' placeholder='Enter class' onChange={handlerChange}/>


          <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SimpleForm
