import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import '../style.css';



function Books(){

    const[books, setBooks] = useState([])

    useEffect(()=>{
        const fetchAllBooks = async ()=>{
            try{
                const res = await axios.get("http://localhost:7000/books")
                setBooks(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllBooks()
    }, [])

    const handleDelete = async(id)=>{
        window.location.reload()
        try{
            await axios.delete("http://localhost:7000/books/"+id)
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div>
             <div className="nav">
                <h1>Manuel Book Shop!</h1>
                <button><Link to="/add" className="nav-btn">Add new book</Link></button>
            </div>
           <div className="books">
            {books.map((book)=>(
                <div className="book" key={book.id}>
                    {book.cover && <img src={book.cover} alt="" />}
                    <div>
                    <h2>{book.title}</h2>
                    <p>{book.desc}</p>
                    <p>Price: {`Ghc${book.price}`}</p>
                    <button className="delete" onClick={()=>handleDelete(book.id)}>Delete</button>
                    <button className="update"><Link to={`/update/${book.id}`}>Update</Link></button>
                    </div>
                </div>
            ))}
           </div>
        </div>
    )
}

export{Books}