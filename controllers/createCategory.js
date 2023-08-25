import CreateCategory from "../models/CreateCategory.js";

export async function handleCatagoryPost(req, res) {
  const { categoryName } = req.body;

  const data = {
    categoryName: categoryName,
  };

  try {
    const createCategory = await CreateCategory.create(data);
    if (createCategory) {
      res.send({ data: createCategory });
      console.log('demo', createCategory);
    } else {
      res.send({ message: "not ok" });
    }
  } catch (e) {
    console.log(e);
  }
 
}


export async function handleCatagoryGet (req, res) {
  try {
      const createCategory = await CreateCategory.find({});
      res.send({ data: createCategory });
      console.log(1, createCategory);
    } catch (e) {
      console.log(e);
    }
}
