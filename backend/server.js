// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const connectDB = require("./config/db");

// const app = express();

// // Connect Database
// connectDB();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Backend is running 🚀");
// });

// // Routes
// const eventRoutes = require("./routes/eventRoutes");
// const authRoutes = require("./routes/authRoutes");

// app.use("/api/events", eventRoutes);
// app.use("/api/auth", authRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });









const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

// ✅ Trust proxy (Render / production)
app.set("trust proxy", 1);

// ✅ Connect Database
connectDB();

// ✅ Security middleware
app.use(helmet());

// ✅ CORS (ONLY your frontend allowed)
app.use(cors({
  origin: [
    "https://gahraaiyan.com",
    "https://www.gahraaiyan.com"
  ],
  credentials: true
}));

// ✅ Body parser
app.use(express.json());

// ✅ Root route (health check)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ Routes
const eventRoutes = require("./routes/eventRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/events", eventRoutes);
app.use("/api/auth", authRoutes);

// ✅ Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || "Server Error"
  });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});