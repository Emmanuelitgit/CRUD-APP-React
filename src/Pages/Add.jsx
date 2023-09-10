import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Add(){

    const[book, setBook] = useState({
        title: "",
        desc: "",
        price: null,
        cover: ""
    })

    const navigate = useNavigate()

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
            await axios.post("http://localhost:7000/books", book)
           navigate("/")
           }catch(err){
            console.log(err)
           }
    }

  

    return(
        <div className="form">
            <h1>Add New Book</h1>
            <input type="text"
            placeholder="title"
            name="title"
            onChange={handleChange}
             />
            <input type="text"
            placeholder="desc"
            name="desc"
            onChange={handleChange}
             />
            <input type="number"
            placeholder="price"
            name="price"
            onChange={handleChange}
             />
            <input type="text"
            placeholder="cover"
            name="cover"
            onChange={handleChange}
             />
             <button className="formButton" onClick={handleClick}>Add</button>
        </div>
    )
}

export{Add}