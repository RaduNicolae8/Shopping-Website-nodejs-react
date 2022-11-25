const express = require('express');
const mysql = require("mysql2");
const cors = require("cors");
//var popup = require('popups');

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api", (req,res) => {
    res.json({"users" : ["userOne","userTwo","userThree"]})
})

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "ParolaDB12#",
    database: "LoginSystem",
});

app.post('/register', (req,res) =>{
    
    const username = req.body.username
    const password = req.body.password

    
    db.query("INSERT INTO users (USR_NAM, PASS) VALUES (?,?)", 
    [username, password],
     (err,result) => {
        console.log(err);
       // throw err;
        if(err!=null && err.message.split(' ')[0] == "Duplicate")
       return res.status(400).send({
         message: err.message.split(' ')[0]
        
       });
       return res.status(200).send({
        message: "OK"
       });
       
            
    })
})

app.listen(5000, () => {console.log("Server started on port 5000...")} )