const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const users = require('./models/Users');
const cors = require('cors');
const session = require('express-session');
const Users = mongoose.model('Users', users.schema);
const bcrypt  = require('bcrypt');
const axios = require('axios');
const url = "http://localhost:3000"

const app = express();

// for parsing application/json
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

// Use cors middleware
require('dotenv/config')
app.use(cors({
    origin: 'http://127.0.0.1:5173',
    optionsSuccessStatus: 200
  }));
  
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))

app.post('/register', async (req, res) => {
    try{
        const saltRounds = 10
        const hash = await bcrypt.hash(req.body.password, saltRounds);
        const users = new Users({
            "email": req.body.email,
            "username": req.body.username,
            "password": hash,
            "items": req.body.items
        });
        await users.save() 
        res.send({"message":'User registered'});
    }catch (err) {
        res.json({error: err.message});
    }
})

app.post('/login', async (req, res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;
        const user = await Users.findOne({email: email});
        if(user){
            bcrypt.compare(password, user.password, function(err, result) {
                if (result === true) {
                  req.session.userData = {
                    username: user.username,
                    items: user.items
                    }
                  res.send(req.session.userData)
                } else {
                  res.send({message: 'Password does not match'});
                }
              });
        } else{
            res.send(res.data)
        }
        
    } catch(err){
        res.json({error: err.message});
    }
})

app.get("/logout", (req, res) => {
    req.session.destroy()
    res.send({message: 'successfully logged out'});
})

app.post("/update", async (req, res) => {
    const updatedItems = req.body.items
    try{
        const user = await Users.findOne({username: req.body.username})
        user.items = updatedItems;
        await user.save();
        res.json({message: "Items updated successfully"})
    } catch(err){
        res.json({error: err.message})
    }
})

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Connected to the database');
        }
    }
);


app.listen(3000, ()=>{
    console.log("Server started on port 3000...")
});

