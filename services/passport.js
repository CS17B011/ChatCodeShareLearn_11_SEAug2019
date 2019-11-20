const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');


passport.serializeUser((user,done) => {
  done(null,user._id);
});

passport.deserializeUser((id,done) => {
  User.findById(id)
    .then(user => {
      done(null,user);
    })
    .catch(err => done(err,null));
});

passport.use(
    new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/success'
  },
  (accessToken, refreshToken, profile, done) => {

    User.findOne({googleid:profile.id})
        .then( (user)=> {
          if(user)
            done(null,user);
          else
          {
            const newUser = new User({
              username: profile.displayName,
              googleid: profile.id,
              emailid: profile.emails[0].value
            });
            newUser.save()
              .then(user => {
                console.log('New User Created: ' + user);
                done(null,user);
              });
          }
        })
        .catch(err => done(err,null));
  }
));