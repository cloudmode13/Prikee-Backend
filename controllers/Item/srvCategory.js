import CategoryService from '../../models/Item/SrvCategory.js';

export async function handleCatagorySrvPost(req, res) {
  const { categoryNameInv } = req.body;
  const userId = req.user.id;
  const data = {
    categoryNameInv: categoryNameInv,
    userId: userId,
  };

  try {
    const categoryInventory = await CategoryService.create(data);
    if (categoryInventory) {
      res.send({ data: categoryInventory });
    } else {
      res.send({ message: 'not ok' });
    }
  } catch (err) {
    console.log(err);
  }
}

export async function handleCatagorySrvGet(req, res) {
  const userId = req.user.id;

  try {
    const categoryInventory = await CategoryService.find({ userId: userId });
    res.send({ data: categoryInventory });
  } catch (e) {
    console.log(e);
  }
}

export async function handleCategorySrvDelete(req, res) {
  const userId = req.user.id;
  try {
    const deletedCategorySrv = await CategoryService.findByIdAndDelete({
      _id: req.params.id,
      userId: userId,
    });

    if (!deletedCategorySrv) {
      return res.status(404).send({ message: 'Category not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
