import express from 'express'
import CreateCategory from '../models/CreateCategory';
const router = express.Router()


router.post("/createCategory",  async (req, res) => {
    const { name, } = req.body;
  
    const data = {
        name:name
    };
  
    try {
      const createCategory = await CreateCategory.create(data);
      console.log(104,createCategory);
      if (createCategory) {
        res.send({ data: createCategory });
      } else {
        res.send({ message: "not ok" });
      }
    } catch (e) {
      console.log(e);
    }
  });
  


 export default router;