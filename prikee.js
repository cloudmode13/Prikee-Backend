import express from "express";
import cors from "cors";
import mongoose from 'mongoose';
import User from './Users.js'
import Otp from "./Otp.js";
import dotenv from "dotenv";
dotenv.config();
import bcrypt from 'bcrypt'
import _ from 'lodash'
import otpGenerator from 'otp-generator'
import Parties from './models/PartiesModel.js'



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


app.post('/signup', async (req, res) => {
    const {number} = req.body

    const data = {
      number: number
    }

    try {
        const user = await User.findOne(data)
        console.log('try', data);
        if(user) return res.status(400).send("user register already!")

        const OTP = otpGenerator.generate(6, {
            digits:true, alphabets:false, upperCase:false, specialChars:false
        })
        console.log('otp',OTP);

        const otp = new Otp ({ number:number, otp: OTP});
        const salt = await bcrypt.genSalt(10)
        otp.otp = await bcrypt.hash(otp.otp, salt)
        const result = await otp.save()
        return res.status(200).send("otp send successfully")
    } catch (error) {
        console.log(error)
    }
})

app.get('/sign', async (req, res) => {
    
    try {
        const user = await User.find({})
        console.log('try', user);
        return res.send({status:"ok", data:user})
      
    } catch (error) {
        console.log(error)
    }
})



// app.use('/parties', partiesRoute)

app.post("/parties",  async (req, res) => {
  const { name,category, mobilenumber, party_type, balance } = req.body;

  const data = {
      name:name,
      category:category,
      mobilenumber:mobilenumber,
      party_type:party_type,
      balance:balance,
  };

  try {
    const parties = await Parties.create(data);
    console.log(104,parties);
    if (parties) {
      res.send({ data: parties });
    } else {
      res.send({ message: "not ok" });
    }
  } catch (e) {
    console.log(e);
  }
});

app.get("/partiesData", async (req, res) => {
  try {
    const partiesData = await Parties.find({});
    res.send({ data: partiesData });
    console.log(1, partiesData);
  } catch (e) {
    console.log(e);
  }
});

app.get("/", (req, res) => {
    console.log("hello cloud");
  });

app.listen(port, () => console.log(`Listening to localhost: ${port}`));