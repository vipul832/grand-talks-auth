const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const passport = require("passport");
const CLIENT_URL = "/";

//REGISTRATION

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(8);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
      profilePic: req.body.profilePic,
    });
    const user = await newUser.save();
    res.status(200).json({ user: user, message: "Registration Successful" });
  } catch (error) {
    res.status(500).json({ message: "Email all ready Register" });
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      email: email,
    });
    if (user.type === "google") {
      return res
        .status(407)
        .json({ message: "Sign In with you Google Account" });
    } else if (user.type === "github") {
      return res
        .status(407)
        .json({ message: "Sign In with you Github Account" });
    } else {
      if (user) {
        const validate = await bcrypt.compare(password, user.password);
        if (validate) {
          const { password, ...others } = user._doc;
          return res
            .status(200)
            .json({ user: others, message: "Login SuccessFull" });
        } else {
          return res.status(400).json({ message: "wrong credentials" });
        }
      } else {
        return res.status(400).json({ message: "User not Register" });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Error" });
  }
});

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/signup/google/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login/failed",
  })
);

router.get(
  "/github",
  passport.authenticate("github", { scope: ["profile", "email"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "/",
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
