import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import collectionsRoutes from "./routes/collections.route.js";
import notesRoutes from "./routes/notes.route.js";
dotenv.config();
// import { auth } from 'express-openid-connect';
import cors from "cors";
// import eoc from "express-openid-connect";
// const { auth, requiresAuth } = eoc;

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.AUTH0_SECRET,
//   baseURL: "http://localhost:3000",
//   clientID: process.env.AUTH0_CLIENT_ID,
//   issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
// };

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

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

// // req.isAuthenticated is provided from the auth router
// app.get("/", (req, res) => {
//   res.send(req["oidc"]?.isAuthenticated() ? "Logged in" : "Logged out");
// });

// Need middleware to check if user is logged in before allowing them to request collections
// app.use(`${apiBaseUrl}/collections`, collectionRoutes);

// app.get(`${apiBaseUrl}/profile`, requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
