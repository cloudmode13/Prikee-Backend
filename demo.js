import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import _ from 'lodash';
import productImageRouter from './routes/Item/productImage.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static('product'));

const port = process.env.PORT || 8000;

const mongourl =
  'mongodb+srv://aruncloudmode:mf2XZuraVUoVEAI6@cluster0.mvermhl.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connnected');
  })
  .catch((e) => console.log(e));

const db = mongoose.connection;

app.use('/productImage', productImageRouter);

app.get('/', (req, res) => {
  console.log('cloudMode Welcome');
});

app.listen(port, () => console.log(`Listening to localhost: ${port}`));
