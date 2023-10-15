import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './books.css'


const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5000/books")
        console.log(res)
        setBooks(res.data);
      
      } catch (error) {
        console.log(error)
      }

    }
    fetchAllBooks();
  }, [])


  const handleClick = async (id) => { 
    try {
      await axios.delete("http://localhost:5000/books/" + id)
      window.location.reload()
    }
     catch (err) {
      console.log(err)
    }
  }



  return (
    <div className='App'>
      <h1>Coffee Shop</h1>
      <div className='books'>
      {
        books.map((book) => (
          <div key={book.id} className="book-card">
            <img src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'alt='img'/>
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
            <button onClick={() => handleClick(book.id)}>Delete</button>
            <button><Link to={`/update/${book.id}`}>Update</Link></button>
          </div>
        ))
      }
      </div>
      <button><Link to="/add">Add new book</Link></button>
    </div>
  )
 
}

export default Books