const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth.js");
const listingRoutes = require("./routes/listing.js");
const bookingRoutes = require("./routes/booking.js");
const userRoutes = require("./routes/user.js");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// CORS setup
app.use(
  cors({
    origin: "https://warm-nest.vercel.app", // Replace with your actual frontend URL
  })
);

/*ROUTES*/
app.use("/auth", authRoutes);
app.use("/properties", listingRoutes);
app.use("/bookings", bookingRoutes);
app.use("/users", userRoutes);

/*MONGOOSE SETUP*/
const PORT = 3001;
mongoose
  .connect(
    "mongodb+srv://User01:12348765@atlascluster.hnyni.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster",
    {
      dbName: "Warm_Nest",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));

/*DEPLOYMENT ACCESS*/
// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.log(err));
