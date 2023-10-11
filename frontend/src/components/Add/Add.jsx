import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Add = () => {
  const [book, setBook] = useState({
    title: '',
    desc: '',
    price: null,
    cover: ''

  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) =>  ({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/books", book);
      navigate('/');

    } catch (error) {
      console.log(error);
    }

  }

  console.log(book)

  return (
    <div className='form'>
      <h1>Add new books in library</h1>
      <input type="text"  name='title' placeholder='title' onChange={handleChange}/>
      <input type="text" name='desc' placeholder='desc' onChange={handleChange}/>
      <input type="number" name='price' placeholder='price' onChange={handleChange}/>
      <input type="text" name='cover' placeholder='cover' onChange={handleChange}/>
      <button onClick={handleClick}>Add to DB</button>
    </div>
  )
}

export default Add