import express from 'express';
import cors from 'cors';
import { produits } from './src/data/data.js';

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/produits', (req, res) => {
  res.json(produits);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
