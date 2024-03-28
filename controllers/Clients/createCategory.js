import CreateCategory from '../../models/Clients/CreateCategory.js';

export async function handleCatagoryPost(req, res) {
  const { categoryName } = req.body;

  const data = {
    categoryName: categoryName,
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
  try {
    const createCategory = await CreateCategory.find({});
    res.send({ data: createCategory });
  } catch (e) {
    console.log(e);
  }
}

export async function handleCategoryDelete(req, res) {
  try {
    const deletedCategory = await CreateCategory.findByIdAndDelete(
      req.params.id,
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
