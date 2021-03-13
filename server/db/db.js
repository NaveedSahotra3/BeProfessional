let mongoose = require('mongoose');


// mongoose.connect('mongodb://localhost:27017/sDB', 
// )
// .then(()=>{
//     console.log('db connected');

// }).catch((err)=>{
//     console.log(err);

// })

// mongoose.connect("mongodb://localhost:27017",
mongoose.connect("mongodb+srv://dawali:dawali@cluster0.6drqe.mongodb.net/dawali?retryWrites=true&w=majority",

    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log('db connected');
        
    })
