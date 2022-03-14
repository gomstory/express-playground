const express = require("express");
const app = express();
const helmet = require("helmet");

// Swagger UI
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            "title": "Sample Pet Store App",
            "description": "This is a sample server for a pet store.",
            "termsOfService": "http://example.com/terms/",
            "contact": {
              "name": "API Support",
              "url": "http://www.example.com/support",
              "email": "support@example.com"
            },
            "version": "1.0.1",
            "servers": ["http://localhost:3000"]
          }
    },
    apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

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