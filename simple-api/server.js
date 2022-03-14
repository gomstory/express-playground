const express = require("express");
const app = express();
const helmet = require("helmet");

// Midleware
app.use(helmet());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());

// Global log middleware
app.use("*", (req, res, next) => {
    console.log(`logger: ${req.ip} - ${req.url}`);
    next();
});

// Use Router to seperate module.
const userRouter = require('./routes/userRouter');
const downloadRouter = require("./routes/downloadRouter");
const indexRouter = require("./routes/indexRouter");
const authRouter = require("./routes/authRouter");

// All routes are here.
app.use("/", indexRouter);
app.use('/download', downloadRouter);
app.use('/user', userRouter);
app.use("/auth", authRouter);

// Listening port
app.listen(3000);