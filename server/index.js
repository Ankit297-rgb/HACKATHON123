const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require('./models/Employee');

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/login", (req, res) =>{
    const {name, email, password} = req.body;
    EmployeeModel.findOne({email: email})
    EmployeeModel.findOne({name: name})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("the password is incorrect")
            }
        } else {
            res.json("No record existed")
        }
    })
    
})

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log("server is running");
});
app.get('/user/:email', (req, res) => {
    const { email } = req.params;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json(user);
            } else {
                res.status(404).json("User not found");
            }
        })
        .catch(err => res.status(500).json(err));
});
