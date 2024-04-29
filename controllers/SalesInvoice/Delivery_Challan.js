import DeliveryChallan from '../../models/SalesInvoice/Delivery_Challan.js';

export async function handleDCPost(req, res) {
  const {
    delNoteNo,
    dcDate,
    dispatchThrough,
    destination,
    termsOfDelivery,
    dcData,
  } = req.body;
  const userId = req.user.id;

  const data = {
    delNoteNo,
    dcDate,
    dispatchThrough,
    destination,
    termsOfDelivery,
    dcData,
    userId: userId,
  };

  try {
    const deliveryChallan = await DeliveryChallan.create(data);
    if (deliveryChallan) {
      res
        .status(201)
        .send({ message: 'Party created successfully', data: deliveryChallan });
    } else {
      res.status(400).send({ message: 'Party creation failed' });
    }
  } catch (e) {
    console.log(e);
  }
}

export async function handleDCGet(req, res) {
  const userId = req.user.id;

  try {
    const deliveryChallan = await DeliveryChallan.find({ userId: userId });

    const latestDCNumber = await DeliveryChallan.findOne().sort({ _id: -1 });

    res.send({
      data: deliveryChallan,
      latestDCNumber: latestDCNumber.delNoteNo,
    });
  } catch (e) {
    console.log(e);
  }
}

export async function handleDCUpdate(req, res) {
  const userId = req.user.id;

  try {
    const updatedDeliveryChallan = await DeliveryChallan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { userId: userId },
      { new: true },
    );
    if (!updatedDeliveryChallan) {
      return res.status(404).send({ message: 'Party not found' });
    }

    return res
      .status(200)
      .send({ message: 'Successfully updated', data: updatedDeliveryChallan });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}

export async function handleDCDelete(req, res) {
  const userId = req.user.id;

  try {
    const deletedDeliveryChallan = await DeliveryChallan.findByIdAndDelete({
      _id: req.params.id,
      userId: userId,
    });

    if (!deletedDeliveryChallan) {
      return res.status(404).send({ message: 'Party not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
