import CategoryInventory from '../../models/Item/CategoryInventory.js';

export async function handleCatagoryInvtPost(req, res) {
  const { categoryNameInv } = req.body;

  const data = {
    categoryNameInv: categoryNameInv,
  };

  try {
    const categoryInventory = await CategoryInventory.create(data);
    if (categoryInventory) {
      res.send({ data: categoryInventory });
    } else {
      res.send({ message: 'not ok' });
    }
  } catch (err) {
    console.log(err);
  }
}

export async function handleCatagoryInvtGet(req, res) {
  try {
    const categoryInventory = await CategoryInventory.find({});
    res.send({ data: categoryInventory });
  } catch (e) {
    console.log(e);
  }
}

export async function handleCategoryInvtDelete(req, res) {
  try {
    const deletedCategoryInvt = await CategoryInventory.findByIdAndDelete(
      req.params.id,
    );

    if (!deletedCategoryInvt) {
      return res.status(404).send({ message: 'Category not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
