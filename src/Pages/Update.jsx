import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"

function Update(){

    const[book, setBook] = useState({
        title: "",
        desc: "",
        price: null,
        cover: ""
    })

    const navigate = useNavigate();
    const location = useLocation();

    const bookId = location.pathname.split("/")[2];
    console.log(bookId)

    const handleChange =(event)=>{
        const{name, value} = event.target

        setBook(prevBook =>{
            return{
                ...prevBook, [name]:value
            }
        })
        }

    const handleClick = async e =>{
        e.preventDefault()
        navigate("/")
           try{
            const res = await axios.put("http://localhost:7000/books/" + bookId, book)
             navigate("/")
           }catch(err){
            console.log(err)
           }
    }

  
    return(
        <div className="form">
            <h1>Update the Book</h1>
            <input type="text"
            placeholder="title"
            name="title"
            onChange={handleChange}
            value={book.title}
             />
            <input type="text"
            placeholder="desc"
            name="desc"
            onChange={handleChange}
            value={book.desc}
             />
            <input type="number"
            placeholder="price"
            name="price"
            onChange={handleChange}
            value={book.price}
             />
            <input type="text"
            placeholder="cover"
            name="cover"
            onChange={handleChange}
            value={book.cover}
             />
             <button className="formButton" onClick={handleClick}>Update</button>
        </div>
    )
}

export{Update}