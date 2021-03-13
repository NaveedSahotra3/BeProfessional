let express = require('express')
let cros = require('cors')
let body = require('body-parser')
let fs = require('fs');
let User = require('./db/models/user')
// let dbconnection = require('./db/db')
require('./db/db')


let app = express() 

app.use(
    
    body.urlencoded({parser: true})
)
// app.use(dbconnection())



app.use(express.json())


app.post('/signup' , function (req, res , next) {
    console.log(req.body)

   //  const {FirstName, LastName ,email, psw,birthday_day} = req.body
   let newUser = new User ({
    first_name:req.body.first_name,
    last_name:req.body.last_name,
       email:req.body.email,
       city: req.body.city,
       Profession: req.body.Profession,
       phone_number: req.body.phone_number,
       country: req.body.country,
       Gender: req.body.Gender,
   
      

       
   })

   myApp.use(express.static('./build'))

   myApp.use('*', (req, res) => {
   
       res.sendFile('index.html', {root: './build/'});
   
   });

   newUser.save().then( ()=>{ console.log("working");
   })


   res.send(res.json({ success: true }));


})






















app.use(express.static('/public'));
app.listen(8080, () => {
    console.log("starting server");
});