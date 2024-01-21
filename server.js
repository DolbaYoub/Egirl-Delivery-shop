import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import multer from 'multer';

const app = express();
const port = 3001;

mongoose.connect('mongodb://localhost:27017/tassedesign', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const designSchema = new mongoose.Schema({
  name: String,
  email: String,
  description: String,
  imageUrl: String,
});

const Design = mongoose.model('Design', designSchema);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}`);
  }
});

const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());

app.post('/submit-design', upload.single('file'), async (req, res) => {
  console.log(req.body); // Affiche les données du formulaire
  console.log(req.file); // Affiche les informations du fichier uploadé, s'il y en a un
  try {
    const { name, email, description } = req.body;
    const imageUrl = req.file ? req.file.path : '';
    const newDesign = new Design({ name, email, description, imageUrl });
    await newDesign.save();
    res.status(200).json({ message: 'Design submitted successfully', data: newDesign });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving the design' });
  }
});

app.use('/uploads', express.static('uploads'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
