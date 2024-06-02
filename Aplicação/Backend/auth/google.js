const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const sql = require('../config/db.config');

passport.use(new GoogleStrategy({
  clientID: 'YOUR_GOOGLE_CLIENT_ID',
  clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
  callbackURL: "http://localhost:5000/auth/google/callback"
},
(accessToken, refreshToken, profile, done) => {
  sql.query('SELECT * FROM users WHERE google_id = ?', [profile.id], (err, res) => {
    if (err) return done(err);
    if (res.length > 0) {
      return done(null, res[0]);
    } else {
      const newUser = { google_id: profile.id, name: profile.displayName, email: profile.emails[0].value };
      sql.query('INSERT INTO users SET ?', newUser, (err, res) => {
        if (err) return done(err);
        newUser.id = res.insertId;
        return done(null, newUser);
      });
    }
  });
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  sql.query('SELECT * FROM users WHERE id = ?', [id], (err, res) => {
    if(err) return done(err);
    done(null, res[0]);
  });
});