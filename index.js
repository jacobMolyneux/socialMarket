const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const passport = require("passport");

if (process.env.NODE_ENV !== "production") {
  //load environment from .env file in non prod environments
  require("dotenv").config();
}
require("./utils/connectdb");

require("./strategies/JwtStrategy");
require("./strategies/LocalStrategy");
require("./authenticate");

const userRouter = require("./routes/userRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//add the client url to the cors policy
const whiteList = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(",")
  : [];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by cors"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(passport.initialize());
app.use("/users", userRouter);

app.get("/", function (req, res) {
  res.send({ status: "success" });
});

// start the server on port 8000
const server = app.listen(process.env.POST || 8000, function () {
  const port = server.address().port;

  console.log("App started ap Port: ", port);
});
