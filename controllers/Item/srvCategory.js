import CategoryService from '../../models/Item/SrvCategory.js'

export async function handleCatagorySrvPost(req, res) {
  const { categoryNameInv } = req.body;

  const data = {
    categoryNameInv: categoryNameInv,
  };

  try {
    const categoryInventory = await CategoryService.create(data);
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


export async function handleCatagorySrvGet (req, res) {
  try {
      const categoryInventory = await CategoryService.find({});
      res.send({ data: categoryInventory });
      console.log(1, categoryInventory);
    } catch (e) {
      console.log(e);
    }
}
