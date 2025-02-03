import multer from 'multer';
import CloudinaryStorage from '../services/cloudinary.js';

const ALLOWED_EXT = ['jpg', 'jpeg', 'webp', 'avif', 'png'];
const ALLOWED_SIZE = 1_048_576 * 2; // 2mb
// const ALLOWED_SIZE = 6; // 2mb

// Dateien im Dateisystem speichern
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './public/uploads');
//   },
//   filename: (req, file, cb) => {
//     // console.log(file);
//     const uniqueName = Date.now() + '-' + Math.round(Math.random() * 16);
//     cb(null, uniqueName + '.' + file.mimetype.split('/')[1]);
//   },
// });

// Am einfachsten für AWS (Amazon Cloud)
// const storage = multer.memoryStorage();

// eigene Multer Storage Engine, um Dateien weiter an Cloudinary zu streamen
const storage = new CloudinaryStorage();

const fileFilter = (req, file, cb) => {
  const fileExt = file.mimetype.split('/')[1];

  if (!ALLOWED_EXT.includes(fileExt)) {
    const err = new Error(`Wrong file type`);
    err.statusCode = 400;
    cb(err);
  } else {
    cb(null, true);
  }
};

const upload = multer({ storage, fileFilter, limits: { fileSize: ALLOWED_SIZE } });

export default upload;
