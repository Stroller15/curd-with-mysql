import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shubham@99",
  database: "bookstore",
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }

  console.log("Connected to the database.");
});

app.get("/", (req, res) => {
  res.json("hello world");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`, `desc`, `price`,`cover`) VALUES (?)";
  const values = [
    req.body.title, 
    req.body.desc, 
    req.body.price,
    req.body.cover
];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("book have been created");
  });
});

//delete functinality
app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";

    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("book have been deleted");
    });
}
)

// update functionality
app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";
    const values = [
        req.body.title, 
        req.body.desc, 
        req.body.price,
        req.body.cover
    ];

    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("book have been updated");
    });
})

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
