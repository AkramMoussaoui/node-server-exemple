const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const todoRouter = require("./api/controllers/todo/router");
const userRouter = require("./api/controllers/user/router");

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.once("open", () => console.log("DATABASE CONNECTED !!"));

const app = express();

app.use(express.json());
app.use(morgan("combined"));
app.use(helmet());
app.use(cors());

// app.use((req, res, next) => {
//   const time = new Date().getHours();
//   if (time > 10 || time < 8) {
//     return res.status(400).json({
//       message: "Currently closed",
//       data: {},
//     });
//   }
//   next();
// });

const PORT = process.env.PORT || 2000;

app.use("/user", userRouter);

app.use("/todo", todoRouter);

app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT));

//USER
/*


{
    id
    nom
    prenom
    phone
    email
    isActive : true/false (PATCH)
}


*/
