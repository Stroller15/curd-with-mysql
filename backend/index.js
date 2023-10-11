import  express  from "express";
import mysql from "mysql";


const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"Shubham@99",
    database:"bookstore",
})

// Connect to the MySQL database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    
    console.log('Connected to the database.');
});


app.get('/', (req, res) => {
    res.json("hello world")
})

app.get('/books', (req, res) => {
    const q = "SELECT * FROM books";

    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post('/books', (req, res) => {
    const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)";
    const values = [req.body.title, req.body.desc, req.body.cover];
    db.query(q, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json("book have been created");
    })
})


app.listen(5000, () => {
    console.log('server is running on port 5000')
    
})