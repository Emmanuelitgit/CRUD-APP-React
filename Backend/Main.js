import express from 'express'
import mysql from 'mysql'
import cors from "cors" 

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Emma19571!",
  database: "manuel_books_shop"
})

app.get("/", (req, res)=>{
  res.json("hello this is the backend")
})

app.get("/books", (req, res)=>{
  const query = "SELECT * FROM books"

  db.query(query, (err, result)=>{
    if(err) throw err
    else{
      res.send(result)
    }
  })
})

app.post("/books", (req, res)=>{
  const query = "INSERT INTO books(`title`, `desc`, `cover`, `price` ) VALUES(?, ?, ?, ?)"
  const{title,desc,cover,price} = req.body

  db.query(query,[ title,desc,cover,price], (err, result)=>{
    if(err) throw err
    else{
      console.log("Added successful")
    }
  })
})

app.delete("/books/:id", (req, res)=>{
  const bookId = req.params.id
  const query = "DELETE FROM books WHERE id = ?"

  db.query(query, [bookId], (err, data)=>{
    if(err) throw err
    else{
      console.log("Deleted successful")
    }
  })
})

app.put("/books/:id", (req, res)=>{
  const bookId = req.params.id
  const query = "UPDATE books SET `title` = ?, `desc` = ?, `price` = ?,  `cover` = ? WHERE id = ? "
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover
  ] 

  db.query(query, [...values, bookId], (err, data)=>{
    if(err) throw err
    else{
      console.log("Updated successful")
    }
  })
})





app.listen(7000,()=>{
  console.log("connected to backend")
})