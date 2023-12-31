const path = require("path")
const multer = require("multer")

const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp")
const UPLOADS_FOLDER = path.resolve(__dirname, "uploads")
const crypto = require("crypto")

const MULTTER =  {
  storage: multer.diskStorage({
    destination: TMP_FOLDER,
    filename: (req, file, callback) => {
      const fileHash = crypto.randomBytes(10).toString*("hex");
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
  },
 }),
}; 

module.exports = {
  TMP_FOLDER, 
  UPLOADS_FOLDER, 
  MULTTER
}