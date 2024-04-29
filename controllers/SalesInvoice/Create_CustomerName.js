import CustomerName from '../../models/SalesInvoice/Create_CustomerName.js';

export async function handleCustomerNamePost(req, res) {
  const { customerName } = req.body;
  const userId = req.user.id;

  const data = {
    customerName: customerName,
    userId: userId,
  };
  try {
    const customerName = await CustomerName.create(data);
    if (customerName) {
      res.send({ data: customerName });
    } else {
      res.send({ message: 'not ok' });
    }
  } catch (err) {
    console.log(err);
  }
}

export async function handleCustomerNameGet(req, res) {
  const userId = req.user.id;

  try {
    const customerName = await CustomerName.find({ userId: userId });
    res.send({ data: customerName });
  } catch (e) {
    console.log(e);
  }
}

export async function handleCustomerNameDelete(req, res) {
  const userId = req.user.id;

  try {
    const deletedcustomerName = await CustomerName.findByIdAndDelete({
      _id: req.params.id,
      userId: userId,
    });
    if (!deletedcustomerName) {
      return res.status(404).send({ message: 'Category not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
