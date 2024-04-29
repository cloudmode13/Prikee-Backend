import SalesPerson from '../../models/Setting/SalesPerson.js';

export async function handleSalesPersonPost(req, res) {
  const { salesPerson, designation } = req.body;
  const userId = req.user.id;

  const data = {
    salesPerson: salesPerson,
    designation: designation,
    userId: userId,
  };
  try {
    const salesPerson = await SalesPerson.create(data);
    if (salesPerson) {
      res.send({ data: salesPerson });
    } else {
      res.send({ message: 'not ok' });
    }
  } catch (err) {
    console.log(err);
  }
}

export async function handleSalesPersonGet(req, res) {
  const userId = req.user.id;

  try {
    const salesPerson = await SalesPerson.find({ userId: userId });
    res.send({ data: salesPerson });
  } catch (e) {
    console.log(e);
  }
}

export async function handleSalesPersonEdit(req, res) {
  const userId = req.user.id;

  try {
    const updatedSalesPerson = await SalesPerson.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      { userId: userId },
    );
    return res
      .status(200)
      .send({ message: 'Successfully updated', data: updatedSalesPerson });
  } catch (error) {
    return res.status(500).send({ message: 'Server error' });
  }
}

export async function handleSalesPersonDelete(req, res) {
  const userId = req.user.id;

  try {
    const deletedsalesPerson = await SalesPerson.findByIdAndDelete({
      _id: req.params.id,
      userId: userId,
    });
    if (!deletedsalesPerson) {
      return res.status(404).send({ message: 'Category not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
