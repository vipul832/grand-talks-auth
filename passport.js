const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
const User = require("./models/User");
const { Profiler } = require("react");

const GOOGLE_CLIENT_ID =
  "638009119685-vv848ujuf1aauagrudqjbrtnf3gj0apv.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "4399ba9402a77a63d83d";
GITHUB_CLIENT_SECRET = "fa1a9d231a2847e03cf628599da2a99cd0fb4aca";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/signup/google/callback",
      scope: ["profile", "email"],
    },
    async function (accessToken, refreshToken, profiler, done) {
      User.find({ email: profiler.emails[0].value }).then((user) => {
        if (user.length !== 0) {
          done(null, user);
        } else {
          new User({
            username: profiler.displayName,
            profilePic: profiler.photos[0].value,
            email: profiler.emails[0].value,
            type: profiler.provider,
          })
            .save()
            .then((newUser) => {
              done(null, newUser);
            });
        }
      });
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/api/auth/github/callback",
      scope: ["profile", "email"],
    },
    async function (accessToken, refreshToken, profiler, done) {
      User.find({ email: profiler.emails[0].value }).then((user) => {
        if (user.length !== 0) {
          done(null, user);
        } else {
          new User({
            username: profiler.displayName,
            profilePic: profiler.photos[0].value,
            email: profiler.emails[0].value,
            type: profiler.provider,
          })
            .save()
            .then((newUser) => {
              done(null, newUser);
            });
        }
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
