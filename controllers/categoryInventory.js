import CategoryInventory from "../models/CategoryInventory.js";

export async function handleCatagoryInvtPost(req, res) {
  const { categoryNameInv } = req.body;

  const data = {
    categoryNameInv: categoryNameInv,
  };

  try {
    const categoryInventory = await CategoryInventory.create(data);
    if (categoryInventory) {
      res.send({ data: categoryInventory });
      console.log('demo', categoryInventory);
    } else {
      res.send({ message: "not ok" });
    }
  } catch (err) {
    console.log(err);
  }
 
}


export async function handleCatagoryInvtGet (req, res) {
  try {
      const categoryInventory = await CategoryInventory.find({});
      res.send({ data: categoryInventory });
      console.log(1, categoryInventory);
    } catch (e) {
      console.log(e);
    }
}
