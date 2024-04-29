import CreateCategory from '../../models/Clients/CreateCategory.js';

export async function handleCatagoryPost(req, res) {
  const { categoryName } = req.body;
  const userId = req.user.id;
  const data = {
    categoryName: categoryName,
    userId: userId,
  };

  try {
    const createCategory = await CreateCategory.create(data);
    if (createCategory) {
      res.send({ data: createCategory });
    } else {
      res.send({ message: 'not ok' });
    }
  } catch (e) {
    console.log(e);
  }
}

export async function handleCatagoryGet(req, res) {
  const userId = req.user.id;
  try {
    const createCategory = await CreateCategory.find({ userId: userId });
    res.send({ data: createCategory });
  } catch (e) {
    console.log(e);
  }
}

export async function handleCategoryDelete(req, res) {
  const userId = req.user.id;
  try {
    const deletedCategory = await CreateCategory.findByIdAndDelete(
      req.params.id,
      { userId: userId },
    );

    if (!deletedCategory) {
      return res.status(404).send({ message: 'Category not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
