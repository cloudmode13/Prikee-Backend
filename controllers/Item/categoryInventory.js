import CategoryInventory from '../../models/Item/CategoryInventory.js';

export async function handleCatagoryInvtPost(req, res) {
  const { categoryNameInv } = req.body;
  const userId = req.user.id;
  const data = {
    categoryNameInv: categoryNameInv,
    userId: userId,
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
  const userId = req.user.id;
  try {
    const categoryInventory = await CategoryInventory.find({ userId: userId });
    res.send({ data: categoryInventory });
  } catch (e) {
    console.log(e);
  }
}

export async function handleCategoryInvtDelete(req, res) {
  const userId = req.user.id;
  try {
    const deletedCategoryInvt = await CategoryInventory.findByIdAndDelete(
      req.params.id,
      { userId: userId },
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
