import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import upload from './middlewares/upload.js';
import s3 from './services/s3.js';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.json({ msg: 'Running' });
});

app.post('/file-upload', upload.single('img'), (req, res, next) => {
  // Variante 1 - Dateisystem
  // const url = 'http://localhost:8080' + req.file.destination.replace('./public', '') + '/' + req.file.filename;
  // ... speichere url in Datenbank
  // res.status(201).json({ msg: 'File upload', url})

  // Variante 2 - Cloudinary
  const { secure_url } = req.file.result;
  // ... speichere secure_url oder public id des Bildes von Cloudinary in Datenbank
  res.status(201).json({ msg: 'File upload', url: secure_url });

  // Variante 3 - AWS S3

  // Konstruiere Anfrage an S3 Bucket, um neues Objekt hinzuzufügen
  // const request = s3.putObject({
  //   Bucket: 'notable-aqua-giraffe',
  //   Key: 'uploads/' + req.file.originalname,
  //   ContentType: req.file.mimetype,
  //   Body: req.file.buffer,
  //   ACL: 'public-read',
  // });

  // Wenn wir gültigen Header zurück bekommen, kann man öffentlichen Pfad zum Bild konstruieren
  // request.on('httpHeaders', (statusCode, headers) => {
  //   res.json({ url: `https://spare-crimson-pike.myfilebase.com/ipfs/${headers['x-amz-meta-cid']}` });
  // });

  // Error handling
  // request.on('error', () => res.status(500).json({ msg: 'Upload failed' }));

  // Sende Anfrage an Bucker
  // request.send();
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ msg: err.message });
});

app.listen(port, () => console.log(chalk.bgGreen(` Server listening on port ${port} `)));
