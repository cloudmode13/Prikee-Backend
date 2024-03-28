import CustomerModal from '../../models/Customer/customerModel.js';

export async function handleCustomerPost(req, res) {
  const {
    name,
    category,
    mobilenumber,
    party_type,
    balance,
    email,
    gst,
    pannumber,
    billingaddress,
    shippingaddress,
    creditperiod,
    creditlimit,
  } = req.body;

  const data = {
    name: name,
    category: category,
    mobilenumber: mobilenumber,
    email: email,
    party_type: party_type,
    balance: balance,
    gst: gst,
    pannumber: pannumber,
    billingaddress: billingaddress,
    shippingaddress: shippingaddress,
    creditperiod: creditperiod,
    creditlimit: creditlimit,
  };

  try {
    const parties = await CustomerModal.create(data);
    if (parties) {
      res
        .status(201)
        .send({ message: 'Party created successfully', data: parties });
    } else {
      res.status(400).send({ message: 'Party creation failed' });
    }
  } catch (e) {
    console.log(e);
  }
}

export async function handleCustomerGet(req, res) {
  try {
    const customers = await CustomerModal.find({});
    res.send({ data: customers });
  } catch (e) {
    console.log(e);
  }
}

export async function handleCustomerUpdate(req, res) {
  try {
    const updatedCustomer = await CustomerModal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!updatedCustomer) {
      return res.status(404).send({ message: 'Party not found' });
    }

    return res
      .status(200)
      .send({ message: 'Successfully updated', data: updatedCustomer });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}

export async function handleCustomerDelete(req, res) {
  try {
    const deletedCustomer = await CustomerModal.findByIdAndDelete(
      req.params.id,
    );

    if (!deletedCustomer) {
      return res.status(404).send({ message: 'Party not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
