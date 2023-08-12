import express from 'express'
import Parties from '../models/PartiesModel';
const router = express.Router()


router.post("/",  async (req, res) => {
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
  
  router.get("/", async (req, res) => {
    try {
      const partiesData = await Parties.find({});
      res.send({ data: partiesData });
      console.log(1, partiesData);
    } catch (e) {
      console.log(e);
    }
  });

 export default router;