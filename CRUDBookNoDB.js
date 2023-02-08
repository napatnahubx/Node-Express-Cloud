require("dotenv").config();
const express = require('express');
const app = express();

app.use(express.json());

let books =[
    {
        id:1,
        title: 'Book 1',
        author: 'Author 1'
    },
    {
        id: 2,
        title: 'Book2',
        author: 'Author 2'
    },
    {
        id: 3,
        title: 'Book 3',
        author: 'Author 3'
    }
];

app.get('/books',(req,res)=>{
    const book = books.find(b=>b.id===parseInt(req.params.id));
    if (!book) res.status(404).send('Book not found');
    res.json(book);
});

app.post('/books',(req,res)=>{
    const book ={
        id: books.length+1,
        title: req.body.author
    };
    books.push(book);
    res.esnd(book);
});

app.put('/books/:id',(req,res)=>{
    const book=books.find(b=>b.id ===parseInt(req.params.id));
    if(!book) res.status(404).send('Book not found');
    const index =books.indexOf(book);
    book.splice(index,1);
    res.send(book);
});

const port =process.env.PORT || 3000;
app.listen(port,()=>console.log(`listening on port  ${port}...`))



