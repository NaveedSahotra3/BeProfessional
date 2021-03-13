let mongoose = require('mongoose');


let userSchema = mongoose.Schema({
    first_name: {type: String  } ,
    last_name: {type: String  } ,
    email: {type: String } ,
    city: {type: String  } ,
    Profession: {type: String } ,
    phone_number: {type: String  } ,
    country: {type: String  } ,
    Gender : {type: String  } ,
    // img : {type: String  } ,

    // img : {type: String , required:true} ,
    // profile: {
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: "Formaa"
    // }

   
});


let User = mongoose.model('BeProssional', userSchema);


module.exports = User;
