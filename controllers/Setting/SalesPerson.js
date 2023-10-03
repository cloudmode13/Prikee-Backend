import SalesPerson from '../../models/Setting/SalesPerson.js';

export async function handleSalesPersonPost(req, res) {
  const { salesPerson, designation } = req.body;
  const data = {
    salesPerson: salesPerson,
    designation: designation,
  };
  try {
    const salesPerson = await SalesPerson.create(data);
    if (salesPerson) {
      res.send({ data: salesPerson });
      console.log('demo', salesPerson);
    } else {
      res.send({ message: 'not ok' });
    }
  } catch (err) {
    console.log(err);
  }
}

export async function handleSalesPersonGet(req, res) {
  try {
    const salesPerson = await SalesPerson.find({});
    res.send({ data: salesPerson });
    console.log(1, salesPerson);
  } catch (e) {
    console.log(e);
  }
}

export async function handleSalesPersonEdit(req, res) {
  try {
    const updatedSalesPerson = await SalesPerson.findByIdAndUpdate(
      req.param.id,
      req.body,
      { new: true },
    );
    if (!updatedSalesPerson) {
      return res.status(404).send({ message: 'Party not found' });
    }

    return res
      .status(200)
      .send({ message: 'Successfully updated', data: updatedSalesPerson });
  } catch (error) {
    return res.status(500).send({ message: 'Server error' });
  }
}

export async function handleSalesPersonDelete(req, res) {
  try {
    const deletedsalesPerson = await SalesPerson.findByIdAndDelete(
      req.params.id,
    );
    if (!deletedsalesPerson) {
      return res.status(404).send({ message: 'Category not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
