import path from 'path';
import express from 'express';
import multer from 'multer';
import fs from 'fs';

const router = express.Router();
const upload = multer({
  dest: path.join(__dirname, '../tmp')

});

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.post('/api/fileanalyse', upload.single('upfile'), (req, res, next) => {
  res.send({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
  fs.unlink(req.file.path, (err) => {
    if (err) console.log(err); else console.log('Remove a file!');
  });
});

export default router;
