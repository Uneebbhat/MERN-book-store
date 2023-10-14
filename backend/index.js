import express from "express";
import { dbConnect } from "./database/db.js";
import { PORT } from "./config/index.js";
import router from "./routers/bookRouter.js";
import cors from "cors";

const app = express();

// Using middleware
app.use(express.json());
app.use(cors());

// Using custom middleware
app.use("/books", router);

// Connecting to database
dbConnect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
