import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import collectionsRoutes from "./routes/collections.route.js";
import usersRoutes from './routes/users.route.js';
import notesRoutes from "./routes/notes.route.js";
import morgan from 'morgan';
dotenv.config();
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;
const apiBaseUrl = process.env.API_BASE_URL || "/api/v1";

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.hc3kell.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected!"));

app.get(`${apiBaseUrl}/`, (req, res) => {
  res.send("Hello World");
});
app.use(`${apiBaseUrl}/notes`, notesRoutes);
app.use(`${apiBaseUrl}/collections`, collectionsRoutes);
app.use(`${apiBaseUrl}/user`, usersRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
