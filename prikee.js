import express from "express";
import cors from "cors";
import mongoose from 'mongoose';
import User from './Users.js'
import Otp from "./Otp.js";
import dotenv from "dotenv";
dotenv.config();
import bcrypt from 'bcrypt'
import _ from 'lodash'
import partiesRouter from './routes/partiesRoute.js'
import createCategoryRouter from './routes/createCategory.js'
import productRouter from "./routes/product.js"
import createInvtRouter from "./routes/categoryInventory.js";
import othersInvtRouter from './routes/othersInventory.js'
import serviceInvtRouter from './routes/serviceInv.js'




const app = express();
app.use(cors());
app.use(express.json());




const port = process.env.PORT || 8000;


const mongourl = "mongodb+srv://aruncloudmode:mf2XZuraVUoVEAI6@cluster0.mvermhl.mongodb.net/?retryWrites=true&w=majority"

mongoose
  .connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connnected");
  })
  .catch((e) => console.log(e));

  const db = mongoose.connection;

  app.use('/parties', partiesRouter)

  
  app.use('/createCategory', createCategoryRouter)

  app.use('/product', productRouter)

  app.use('/categoryInvt', createInvtRouter)

  app.use('/othersInvt', othersInvtRouter)

  app.use('/serviceInvt', serviceInvtRouter)

app.get("/", (req, res) => {
    console.log("hello cloud");
  });

app.listen(port, () => console.log(`Listening to localhost: ${port}`));