const router = require("express").Router();
const multer = require("multer");

const Listing = require("../models/Listing");
const User = require("../models/User");

/* Configuration Multer for File Upload */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // Store uploaded files in the 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  },
});

const upload = multer({ storage });

/* CREATE LISTING */
router.post("/create", upload.array("listingPhotos"), async (req, res) => {
  try {
    /* Take the in4 from the forms*/
    const {
      userId,
      category,
      type,
      streetAddress,
      aptSuite,
      city,
      province,
      country,
      bedroomCount,
      bedCount,
      bathroomCount,
      amentities,
      title,
      description,
      highlight,
      highlightDesc,
      price,
    } = req.body;

    const user = await User.findById(userId);

    const listingPhotos = req.files;

    if (!listingPhotos) {
      return res.status(400).send("No file uploaded");
    }

    const listingPhotoPaths = listingPhotos.map((file) => file.path);

    const newListing = new Listing({
      userId,
      firstName: user.firstName,
    });
  } catch (error) {}
});
