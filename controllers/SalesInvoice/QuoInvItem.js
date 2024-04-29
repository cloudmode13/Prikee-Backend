import QuoInvItem from '../../models/SalesInvoice/QuoInvItem.js';

export async function handleQuoInvItemPost(req, res) {
  const { itemName, itemCode, salesPrice, salesGst } = req.body;
  const userId = req.user.id;

  const data = {
    itemName,
    itemCode,
    salesPrice,
    salesGst,
    userId: userId,
  };

  try {
    const quoInvItem = await QuoInvItem.create(data);
    if (quoInvItem) {
      res
        .status(201)
        .send({ message: 'Service created successfully', data: quoInvItem });
    } else {
      res.status(400).send({ message: 'Service creation failed' });
    }
  } catch (e) {
    console.log(e);
  }
}

export async function handleQuoInvItemGet(req, res) {
  const userId = req.user.id;

  try {
    const quoInvItem = await QuoInvItem.find({ userId: userId });
    res.send({ data: quoInvItem });
  } catch (e) {
    console.log(e);
  }
}

export async function handleQuoInvItemUpdate(req, res) {
  const userId = req.user.id;

  try {
    const updatedQuoInvItem = await QuoInvItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { userId: userId },
      { new: true },
    );
    if (!updatedQuoInvItem) {
      return res.status(404).send({ message: 'ServiceItem not found' });
    }

    return res
      .status(200)
      .send({ message: 'Successfully updated', data: updatedQuoInvItem });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}

export async function handleQuoInvItemDelete(req, res) {
  const userId = req.user.id;

  try {
    const deletedQuoInvItem = await QuoInvItem.findByIdAndDelete({
      _id: req.params.id,
      userId: userId,
    });

    if (!deletedQuoInvItem) {
      return res.status(404).send({ message: 'ServiceItem not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
