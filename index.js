const express=require('express');

const passport=require('passport');
var GoogleStrategy=require('passport-google-oauth20').OAuth2Strategy;
const keys=require('./config/keys');

const app=express();

passport.use(new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
},(accessToken)=>{
        console.log(accessToken);
    }   
));

app.get('/auth/google', passport.authenticate('google',{
        scope:['profile', 'email']
    })
);

const PORT=process.env.PORT || 5000;

app.listen(PORT);

