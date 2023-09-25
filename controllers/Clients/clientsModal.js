import ClientModal from '../../models/Clients/ClientModal.js';

export async function handleClientPost(req, res) {
  const {
    name,
    mobileNumber,
    partyType,
    balance,
    email,
    gst,
    panNumber,
    billingAddress,
    shippingAddress,
    creditPeriod,
    creditLimit,
  } = req.body;

  const data = {
    name: name,
    mobileNumber: mobileNumber,
    email: email,
    partyType: partyType,
    balance: balance,
    gst: gst,
    panNumber: panNumber,
    billingAddress: billingAddress,
    shippingAddress: shippingAddress,
    creditPeriod: creditPeriod,
    creditLimit: creditLimit,
  };

  try {
    const client = await ClientModal.create(data);
    console.log(104, client);
    if (client) {
      res
        .status(201)
        .send({ message: 'Client created successfully', data: client });
    } else {
      res.status(400).send({ message: 'Client creation failed' });
    }
  } catch (e) {
    console.log(e);
  }
}

export async function handleClientGet(req, res) {
  try {
    const client = await ClientModal.find({});
    res.send({ data: client });
    console.log(1, client);
  } catch (e) {
    console.log(e);
  }
}

export async function handleClientUpdate(req, res) {
  try {
    const updatedClient = await ClientModal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    console.log('hello', updatedClient);
    if (!updatedClient) {
      return res.status(404).send({ message: 'Client not found' });
    }

    return res
      .status(200)
      .send({ message: 'Successfully updated', data: updatedClient });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}

export async function handleClientDelete(req, res) {
  try {
    const deletedClient = await ClientModal.findByIdAndDelete(req.params.id);

    if (!deletedClient) {
      return res.status(404).send({ message: 'Client not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
