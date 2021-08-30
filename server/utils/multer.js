const multer = require("multer");
const { cloudStorage } = require("./cloudinary");
const multerUploads = multer({ storage: cloudStorage });
module.exports = { multerUploads };
