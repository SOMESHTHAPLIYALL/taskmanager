const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const app = express();

dotenv.config();
connectDB();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//FOR USERS
app.use("/api/v1/users", require("./routes/userRoutes"));

//FOR TODOS
app.use("/api/v1/todos", require("./routes/todoRoutes"));

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
  console.log("Server Started");
});
