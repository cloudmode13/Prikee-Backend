import PaidToCategory from '../../models/Expenses/PaidToCategory_Modal.js';

export async function handlePTCatagoryPost(req, res) {
  const { categoryName } = req.body;

  const data = {
    categoryName: categoryName,
  };

  try {
    const paidToCategory = await PaidToCategory.create(data);
    console.log('pad', paidToCategory);
    if (paidToCategory) {
      res.send({ data: paidToCategory });
    } else {
      res.send({ message: 'not ok' });
    }
  } catch (e) {
    console.log(e);
  }
}

export async function handlePTCatagoryGet(req, res) {
  try {
    const paidToCategory = await PaidToCategory.find({});
    res.send({ data: paidToCategory });
  } catch (e) {
    console.log(e);
  }
}

export async function handlePTCategoryDelete(req, res) {
  try {
    const deletedCategory = await PaidToCategory.findByIdAndDelete(
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
