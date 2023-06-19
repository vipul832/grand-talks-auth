const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const cors = require("cors");
const ImageKit = require("imagekit");
const passport = require("passport");
const cookieSession = require("cookie-session");
const passportSetup = require("./passport");
const path = require("path");

dotenv.config();
app.use(express.json());

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_URL,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

// app.use(
//   cors({
//     origin: ["http://localhost:5173", "https://d1mngkfflca1b7.cloudfront.net"],
//     credentials: true,
//   })
// );

app.use(express.static(path.join(__dirname, "./client/dist")));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(console.log("connected to mongoDb"))
  .catch((error) => console.log(error));

app.use(
  cookieSession({ name: "session", keys: ["auth"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.get("/upload", function (req, res) {
  var result = imagekit.getAuthenticationParameters();
  res.send(result);
});

app.listen("5000", () => {
  console.log("backed is running.");
});
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist/index.html"));
});
