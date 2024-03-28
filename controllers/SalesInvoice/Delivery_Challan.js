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

  const data = {
    delNoteNo,
    dcDate,
    dispatchThrough,
    destination,
    termsOfDelivery,
    dcData,
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
  try {
    const deliveryChallan = await DeliveryChallan.find({});
    res.send({ data: deliveryChallan });
  } catch (e) {
    console.log(e);
  }
}

export async function handleDCUpdate(req, res) {
  try {
    const updatedDeliveryChallan = await DeliveryChallan.findByIdAndUpdate(
      req.params.id,
      req.body,
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
  try {
    const deletedDeliveryChallan = await DeliveryChallan.findByIdAndDelete(
      req.params.id,
    );

    if (!deletedDeliveryChallan) {
      return res.status(404).send({ message: 'Party not found' });
    }

    return res.status(200).send({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server error' });
  }
}
