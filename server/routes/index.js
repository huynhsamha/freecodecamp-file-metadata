import path from 'path';
import express from 'express';
import multer from 'multer';

const router = express.Router();
const upload = multer({ dest: path.join(__dirname, '../tmp') });

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../views/home.html'));
});

router.post('/get-file-size', upload.single('file'), (req, res, next) => {
  res.send({ size: req.file.size });
});

export default router;
