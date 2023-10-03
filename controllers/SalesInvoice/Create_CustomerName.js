import CustomerName from '../../models/SalesInvoice/Create_CustomerName.js';

export async function handleCustomerNamePost(req, res) {
  const { customerName } = req.body;
  const data = {
    customerName: customerName,
  };
  try {
    const customerName = await CustomerName.create(data);
    if (customerName) {
      res.send({ data: customerName });
      console.log('demo', customerName);
    } else {
      res.send({ message: 'not ok' });
    }
  } catch (err) {
    console.log(err);
  }
}

export async function handleCustomerNameGet(req, res) {
  try {
    const customerName = await CustomerName.find({});
    res.send({ data: customerName });
    console.log(1, customerName);
  } catch (e) {
    console.log(e);
  }
}

export async function handleCustomerNameDelete(req, res) {
  try {
    const deletedcustomerName = await CustomerName.findByIdAndDelete(
      req.params.id,
    );
    if (!deletedcustomerName) {
      return res.status(404).send({ message: 'Category not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
