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
  const { name,category, mobilenumber, party_type, balance,email,
  gst, pannumber, billingaddress, shippingaddress } = req.body;

  const data = {
      name:name,
      category:category,
      mobilenumber:mobilenumber,
      email:email,
      party_type:party_type,
      balance:balance,
      gst:gst,
      pannumber:pannumber,
      billingaddress:billingaddress,
      shippingaddress:shippingaddress
  };

  try {
    const parties = await Parties.create(data);
    console.log(104, parties);
    if (parties) {
      res.status(201).send({ message: "Party created successfully", data: parties });
    } else {
      res.status(400).send({ message: "Party creation failed" });
    }
  } catch (e) {
    console.log(e);

  }
  
});

app.get("/partiesData", async (req, res) => {
  try {
    const parties = await Parties.find({});
    res.send({ data: parties });
    console.log(1, parties);
  } catch (e) {
    console.log(e);
  }
});


app.delete("/partiesData/:_id", async (req, res) => {
  console.log(req.params._id);

  try {
    const parties = await Parties.findByIdAndDelete(req.params._id);

    if (!parties) {
      res.send({ message: "error" });
    } else {
     
      res.send({ message: "Successfully delete" });

    }
  } catch (e) {
    console.log(e);
  } 
});

app.get("/", (req, res) => {
    console.log("hello cloud");
  });

app.listen(port, () => console.log(`Listening to localhost: ${port}`));