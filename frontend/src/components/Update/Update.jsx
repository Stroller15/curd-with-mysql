import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
  const [book, setBook] = useState({
    title: '',
    desc: '',
    price: null,
    cover: ''

  })

  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2]

  const handleChange = (e) => {
    setBook((prev) =>  ({...prev, [e.target.name]: e.target.value}))
  }

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put("http://localhost:5000/books/" + bookId, book);
      navigate('/');

    } catch (error) {
      console.log(error);
    }

  }

  console.log(book)

  return (
    <div className='form'>
      <h1>Update books in library</h1>
      <input type="text"  name='title' placeholder='title' onChange={handleChange}/>
      <input type="text" name='desc' placeholder='desc' onChange={handleChange}/>
      <input type="number" name='price' placeholder='price' onChange={handleChange}/>
      <input type="text" name='cover' placeholder='cover' onChange={handleChange}/>
      <button onClick={handleUpdate}>Update to DB</button>
    </div>
  )
}

export default Update