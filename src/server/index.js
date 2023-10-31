const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");
const {body} = require("express/lib/request");
const async = require("async");
const todo = require("./route/todo");

//middleware
app.use(cors());
app.use(express.json());

app.listen(5100, () => {
    console.log("server has starded")
});

//ROUTES//

app.use('/todos', todo);



//create a todo


// app.post("/todos", async(req,res) =>{
//     try{
//         console.log(req.body)
//         res.send(200, {content: "OK"})
//     }catch (e) {
//         console.error(e.message)
//     }
// })
//get all todos

//get a todo

//update a todo

//delete a todo



