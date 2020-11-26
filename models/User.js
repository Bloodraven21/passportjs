var mongoose=require('mongoose');

var {Schema}=mongoose;

let userSchema= new Schema({
    googleId: String
});

mongoose.model('users', userSchema);