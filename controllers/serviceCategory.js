import CreateSrvCategory from "../models/ServiceCategory.js";

export async function handleSrvCatagoryPost(req, res) {
  const { categoryName } = req.body;

  const data = {
    categoryName: categoryName,
  };

  try {
    const createSrvCategory = await CreateSrvCategory.create(data);
    if (createSrvCategory) {
      res.send({ data: createSrvCategory });
      console.log('demo', createSrvCategory);
    } else {
      res.send({ message: "not ok" });
    }
  } catch (e) {
    console.log(e);
  }
 
}


export async function handleSrvCatagoryGet (req, res) {
  try {
      const createSrvCategory = await CreateSrvCategory.find({});
      res.send({ data: createSrvCategory });
      console.log(1, createSrvCategory);
    } catch (e) {
      console.log(e);
    }
}
