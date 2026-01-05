// const express = require("express");
// const cors = require("cors");
// const noteRoutes = require("./routes/noteRoutes");
// const app = express();
// // ENABLE CORS FOR ALL ORIGINS 🚀
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     res.header("Access-Control-Allow-Headers", "Content-Type");
//     next();
// });

// // app.use(cors({
// //     origin: "*",
// //     methods: ["GET", "POST", "PUT", "DELETE"],
// //     allowedHeaders: ["Content-Type"],
// // }));
// app.use(cors());
// app.options("*", cors());

// app.use(express.json());

// app.use("/api/notes", noteRoutes);

// app.listen(5000, () => console.log("Server running on port 5000"));

// const express = require("express");
// const cors = require("cors");
// const noteRoutes = require("./routes/noteRoutes");

// const app = express();
// app.use(cors({
//   origin: "*",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type"]
// }));
// // ✔ Preflight request fix for Express 5
// app.use((req, res, next) => {
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     res.header("Access-Control-Allow-Headers", "Content-Type");
//     return res.sendStatus(200);
//   }
//   next();
// });
// app.use(express.json());

// app.use("/api/notes", noteRoutes);

// app.listen(5000, () => console.log("Server running on port 5000"));
// const express = require("express");
// const noteRoutes = require("./routes/noteRoutes");

// const app = express();

// app.use(express.json());

// // routes
// app.use("/api/notes", noteRoutes);

// app.listen(5000, () => console.log("Server running on port 5000"));

// const express = require("express");
// const cors = require("cors");
// const noteRoutes = require("./routes/noteRoutes");

// const app = express();

// // Enable CORS properly
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/notes", noteRoutes);

// app.listen(4000, () => console.log("Server running on port 4000"));
// const express = require("express");
// const path = require("path");
// const cors = require("cors");
// const noteRoutes = require("./routes/noteRoutes");

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Serve frontend
// app.use(express.static(path.join(__dirname, "public")));

// // API routes
// app.use("/api/notes", noteRoutes);

// // Home route
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.listen(4000, () => {
//   console.log("Server running on port 4000");
// });
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const noteRoutes = require("./routes/noteRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// 🔥 MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));
app.use("/api/notes", noteRoutes);
// serve frontend
app.use(express.static(path.join(__dirname, "public")));

// api routes


// home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


